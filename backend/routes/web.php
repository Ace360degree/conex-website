<?php

use App\Mail\LeadSubmissionMail;
use App\Models\Lead;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

/**
 * Web dashboard to view database leads.
 */
Route::get('/leads', function () {
    $leads = Lead::orderBy('id', 'desc')->get();
    return view('leads', compact('leads'));
});

/**
 * Preview how the lead confirmation email looks.
 */
Route::get('/emails/preview', function () {
    $lead = Lead::latest()->first();

    if (!$lead) {
        $lead = new Lead([
            'id' => 1,
            'form_type' => 'contact',
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'phone' => '+1 (555) 234-5678',
            'company' => 'Apex Steel Structures',
            'subject' => 'BIM Modeling & Detailing Inquiry',
            'service' => 'Structural Steel Detailing',
            'message' => 'We have a commercial project requiring AISC detailing and BIM coordination. Please send a proposal.',
        ]);
    }

    return new LeadSubmissionMail($lead);
});

/**
 * View logged emails extracted from storage/logs/laravel.log.
 */
Route::get('/emails/logs', function () {
    $logPath = storage_path('logs/laravel.log');
    $emails = [];

    if (File::exists($logPath)) {
        $content = File::get($logPath);
        // Split by log timestamp lines that log email
        $pattern = '/\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \w+\.DEBUG: From:.*?(?=\[\d{4}-\d{2}-\d{2}|\z)/s';
        if (preg_match_all($pattern, $content, $matches, PREG_SET_ORDER)) {
            foreach (array_reverse($matches) as $match) {
                $emails[] = [
                    'date' => $match[1],
                    'raw' => trim(substr($match[0], 22)),
                ];
                if (count($emails) >= 20) {
                    break;
                }
            }
        }
    }

    return view('mail-logs', compact('emails'));
});
