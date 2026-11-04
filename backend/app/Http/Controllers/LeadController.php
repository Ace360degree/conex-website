<?php

namespace App\Http\Controllers;

use App\Mail\LeadSubmissionMail;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class LeadController extends Controller
{
    /**
     * Get all submitted leads.
     */
    public function index()
    {
        $leads = Lead::orderBy('id', 'desc')->get();

        return response()->json([
            'success' => true,
            'total' => $leads->count(),
            'leads' => $leads,
        ]);
    }

    public function storeFooter(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'mobile' => ['required', 'string', 'max:30'],
            'email' => ['required', 'email', 'max:255'],
            'service' => ['nullable', 'string', 'max:255'],
            'message' => ['nullable', 'string'],
        ]);

        $lead = $this->createLead($data, 'footer');

        return $this->respondSuccess($lead, 'Thank you for reaching out. Our team will get back to you shortly.');
    }

    public function storeContact(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'company' => ['required', 'string', 'max:255'],
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
            'file' => ['nullable', 'file', 'max:10240'],
        ]);

        if ($request->hasFile('file')) {
            $data['file_path'] = $request->file('file')->store('leads', 'public');
        }

        $lead = $this->createLead($data, 'contact');

        return $this->respondSuccess($lead, 'Thank you! Your query has been received. Our engineering team will contact you shortly.');
    }

    public function destroy($id)
    {
        $lead = Lead::findOrFail($id);

        if ($lead->file_path && Storage::disk('public')->exists($lead->file_path)) {
            Storage::disk('public')->delete($lead->file_path);
        }

        $lead->delete();

        return response()->json([
            'success' => true,
            'message' => 'Lead deleted successfully.',
        ]);
    }

    private function createLead(array $data, string $formType): Lead
    {
        $lead = Lead::create([
            'form_type' => $formType,
            'name' => $data['name'],
            'email' => $data['email'],
            'mobile' => $data['mobile'] ?? null,
            'phone' => $data['phone'] ?? null,
            'company' => $data['company'] ?? null,
            'subject' => $data['subject'] ?? null,
            'service' => $data['service'] ?? null,
            'message' => $data['message'] ?? null,
            'file_path' => $data['file_path'] ?? null,
        ]);

        // try {
        //     // Send confirmation email to the person who contacted
        //     Mail::to($lead->email)->send(new LeadSubmissionMail($lead));

        //     // Also send notification email to company/admin
        //     $adminEmail = env('MAIL_ADMIN_ADDRESS', env('MAIL_FROM_ADDRESS'));
        //     if ($adminEmail && strtolower(trim($adminEmail)) !== strtolower(trim($lead->email))) {
        //         Mail::to($adminEmail)->send(new LeadSubmissionMail($lead));
        //     }


 // Thank-you email to the visitor: contact form only, not the footer form
    if ($formType !== 'footer') {
        try {
            Mail::to($lead->email)->send(new LeadSubmissionMail($lead));
        } catch (\Throwable $e) {
            report($e);
        }
    }

    // Notification to admin: always sent, for every form
    try {
        $adminEmail = config('mail.admin_address');
        if ($adminEmail && ($formType === 'footer' || strtolower(trim($adminEmail)) !== strtolower(trim($lead->email)))) {
            Mail::to($adminEmail)->send(new LeadSubmissionMail($lead));
        }

        } catch (\Throwable $e) {
            report($e);
        }

        return $lead;
    }

    private function respondSuccess(Lead $lead, string $message)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'lead_id' => $lead->id,
        ], 201);
    }
}
