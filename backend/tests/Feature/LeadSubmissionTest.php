<?php

namespace Tests\Feature;

use App\Mail\LeadSubmissionMail;
use App\Models\Lead;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class LeadSubmissionTest extends TestCase

{
    use RefreshDatabase;

    public function test_can_submit_footer_contact_form(): void
    {
        Mail::fake();

        $response = $this->postJson('/api/footer-contact', [
            'name' => 'Test Footer User',
            'mobile' => '+91-9876543210',
            'email' => 'footer.test@example.com',
            'service' => 'Structural Steel Detailing',
            'message' => 'Need steel detailing services.',
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
            ]);

        $this->assertDatabaseHas('leads', [
            'form_type' => 'footer',
            'name' => 'Test Footer User',
            'email' => 'footer.test@example.com',
        ]);

        Mail::assertSent(LeadSubmissionMail::class);
    }

    public function test_can_submit_main_contact_form(): void
    {
        Mail::fake();

        $response = $this->postJson('/api/contact', [
            'name' => 'Test Contact User',
            'email' => 'contact.test@example.com',
            'phone' => '+1-555-4321',
            'company' => 'Conex Partner Corp',
            'subject' => 'BIM Detailing Collaboration',
            'message' => 'Looking for long term partnership.',
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
            ]);

        $this->assertDatabaseHas('leads', [
            'form_type' => 'contact',
            'name' => 'Test Contact User',
            'email' => 'contact.test@example.com',
            'company' => 'Conex Partner Corp',
        ]);

        Mail::assertSent(LeadSubmissionMail::class);
    }

    public function test_can_submit_contact_form_with_file_attachment(): void
    {
        Mail::fake();
        Storage::fake('public');

        $file = UploadedFile::fake()->create('project-specs.pdf', 100);

        $response = $this->post('/api/contact', [
            'name' => 'Attachment User',
            'email' => 'attachment@example.com',
            'phone' => '+1-555-9999',
            'company' => 'Design Eng Co',
            'subject' => 'Project Specs Attached',
            'message' => 'Please find specs attached.',
            'file' => $file,
        ], [
            'Accept' => 'application/json',
        ]);

        $response->assertStatus(201);

        $lead = Lead::where('email', 'attachment@example.com')->first();
        $this->assertNotNull($lead);
        $this->assertNotNull($lead->file_path);
        Storage::disk('public')->assertExists($lead->file_path);

        Mail::assertSent(LeadSubmissionMail::class);
    }

    public function test_can_list_leads_via_api(): void
    {
        $response = $this->getJson('/api/leads');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'total',
                'leads',
            ]);
    }
}
