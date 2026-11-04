<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Logs - Conex Engineering</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="bg-gray-50 text-gray-900 min-h-screen">
    <header class="bg-gray-900 text-white border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-yellow-400">Email Logs & Transports</h1>
                <p class="text-sm text-gray-400">Mail driver: <code class="text-yellow-300 font-mono">{{ config('mail.default') }}</code></p>
            </div>
            <div class="flex items-center gap-3">
                <a href="/leads" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg text-gray-200 border border-gray-700 transition">
                    <i class="fa-solid fa-database"></i> View Database Leads
                </a>
                <a href="/emails/preview" class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-sm font-semibold rounded-lg text-gray-900 transition">
                    <i class="fa-solid fa-eye"></i> Email Template Preview
                </a>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h2 class="text-lg font-bold text-gray-800 mb-2">Mail Configuration Details</h2>
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm mt-3">
                <div class="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span class="text-gray-500 block text-xs">MAIL_MAILER</span>
                    <strong class="text-gray-900 font-mono">{{ config('mail.default') }}</strong>
                </div>
                <div class="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span class="text-gray-500 block text-xs">MAIL_FROM_ADDRESS</span>
                    <strong class="text-gray-900">{{ config('mail.from.address') }}</strong>
                </div>
                <div class="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span class="text-gray-500 block text-xs">ADMIN_NOTIFY_EMAIL</span>
                    <strong class="text-gray-900">{{ env('MAIL_ADMIN_ADDRESS', config('mail.from.address')) }}</strong>
                </div>
                <div class="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <span class="text-gray-500 block text-xs">LOG_FILE</span>
                    <strong class="text-gray-900 font-mono text-xs">storage/logs/laravel.log</strong>
                </div>
            </div>
        </div>

        <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800">Recent Sent / Logged Emails</h2>
                <span class="text-xs text-gray-500">Extracted from laravel.log</span>
            </div>
            @if (empty($emails))
                <div class="p-12 text-center text-gray-500">
                    <i class="fa-solid fa-envelope-open-text text-4xl text-gray-300 mb-3"></i>
                    <p class="text-base font-medium">No logged emails yet.</p>
                </div>
            @else
                <div class="divide-y divide-gray-200">
                    @foreach ($emails as $email)
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-yellow-100 text-yellow-800">
                                    {{ $email['date'] ?? 'Email Message' }}
                                </span>
                            </div>
                            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs font-mono whitespace-pre-wrap">{{ $email['raw'] }}</pre>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </main>
</body>
</html>
