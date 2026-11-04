<?php

namespace App\Mail;

use App\Models\Lead;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class LeadSubmissionMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Lead $lead)
    {
        //
    }

    public function envelope(): Envelope
    {
        $subject = $this->lead->subject
            ? 'Conex Engineering Inquiry: ' . $this->lead->subject
            : 'Thanks for contacting Conex Engineering';

        return new Envelope(
            subject: $subject,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.lead-submission',
            with: [
                'lead' => $this->lead,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        if ($this->lead->file_path && Storage::disk('public')->exists($this->lead->file_path)) {
            return [
                Attachment::fromPath(Storage::disk('public')->path($this->lead->file_path)),
            ];
        }

        return [];
    }
}
