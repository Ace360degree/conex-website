<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Confirmation - Conex Engineering</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; padding: 24px 16px;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <div style="border-bottom: 2px solid #eab308; padding-bottom: 16px; margin-bottom: 24px;">
            <h2 style="margin: 0; color: #111827; font-size: 22px;">Conex Engineering</h2>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">Steel Detailing & BIM Solutions</p>
        </div>

        <p style="font-size: 16px; color: #111827;">Hello <strong>{{ $lead->name }}</strong>,</p>

        <p style="color: #4b5563;">Thank you for contacting Conex Engineering. We have received your submission and our team will get back to you shortly.</p>

        <div style="background: #f9fafb; border-radius: 8px; padding: 18px; margin: 24px 0; border: 1px solid #e5e7eb;">
            <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">Submission Summary</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
    
            <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Email:</strong></td>
                    <td style="padding: 6px 0; color: #111827;"><a href="mailto:{{ $lead->email }}" style="color: #2563eb;">{{ $lead->email }}</a></td>
                </tr>
                @if ($lead->mobile)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Mobile:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">{{ $lead->mobile }}</td>
                </tr>
                @endif
                @if ($lead->phone)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Phone:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">{{ $lead->phone }}</td>
                </tr>
                @endif
                @if ($lead->company)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Company:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">{{ $lead->company }}</td>
                </tr>
                @endif
                @if ($lead->service)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Service:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">{{ $lead->service }}</td>
                </tr>
                @endif
                @if ($lead->subject)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Subject:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">{{ $lead->subject }}</td>
                </tr>
                @endif
                @if ($lead->file_path)
                <tr>
                    <td style="padding: 6px 0; color: #6b7280;"><strong>Attachment:</strong></td>
                    <td style="padding: 6px 0; color: #111827;">File attached</td>
                </tr>
                @endif
            </table>

            @if ($lead->message)
            <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0 0 6px 0; color: #6b7280; font-size: 14px;"><strong>Message:</strong></p>
                <p style="margin: 0; color: #1f2937; white-space: pre-line; font-size: 14px;">{{ $lead->message }}</p>
            </div>
            @endif
        </div>

        <p style="color: #6b7280; font-size: 14px; margin-bottom: 0;">
            Best regards,<br>
            <strong style="color: #111827;">Conex Engineering Team</strong><br>
            <a href="https://conexengineering.com" style="color: #2563eb; text-decoration: none;">www.conexengineering.com</a>
        </p>
    </div>
</body>
</html>
