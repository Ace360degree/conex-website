<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Leads - Conex Engineering</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body class="bg-gray-50 text-gray-900 min-h-screen">
    <header class="bg-gray-900 text-white border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
                <h1 class="text-2xl font-bold tracking-tight text-yellow-400">Conex Engineering Leads</h1>
                <p class="text-sm text-gray-400">Database Records & Inquiries</p>
            </div>
            <div class="flex items-center gap-3">
                <a href="/emails/preview" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg text-gray-200 border border-gray-700 transition">
                    <i class="fa-solid fa-envelope"></i> Preview Email
                </a>
                <a href="/emails/logs" class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-sm font-medium rounded-lg text-gray-200 border border-gray-700 transition">
                    <i class="fa-solid fa-file-lines"></i> Mail Logs
                </a>
                <a href="/api/leads" target="_blank" class="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-sm font-semibold rounded-lg text-gray-900 transition">
                    <i class="fa-solid fa-code"></i> JSON API
                </a>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Status Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500">Total Leads in Database</p>
                    <p class="text-3xl font-extrabold text-gray-900 mt-1">{{ $leads->count() }}</p>
                </div>
                <div class="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center text-xl">
                    <i class="fa-solid fa-database"></i>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500">Contact Form Submissions</p>
                    <p class="text-3xl font-extrabold text-gray-900 mt-1">{{ $leads->where('form_type', 'contact')->count() }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center text-xl">
                    <i class="fa-solid fa-address-book"></i>
                </div>
            </div>
            <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                    <p class="text-sm font-medium text-gray-500">Footer Form Submissions</p>
                    <p class="text-3xl font-extrabold text-gray-900 mt-1">{{ $leads->where('form_type', 'footer')->count() }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-xl">
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>

        <!-- Leads Table -->
        <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-lg font-bold text-gray-800">Submitted Inquiries</h2>
                <span class="text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-800 rounded-full">Database Connected (MySQL)</span>
            </div>

            @if ($leads->isEmpty())
                <div class="p-12 text-center text-gray-500">
                    <i class="fa-solid fa-inbox text-4xl text-gray-300 mb-3"></i>
                    <p class="text-base font-medium">No leads submitted yet.</p>
                    <p class="text-sm mt-1">Submit a query via the website contact form or footer form to see records here.</p>
                </div>
            @else
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr class="bg-gray-50 text-gray-600 font-semibold border-b border-gray-200 uppercase tracking-wider text-xs">
                                <th class="py-3 px-4">#ID</th>
                                <th class="py-3 px-4">Form Type</th>
                                <th class="py-3 px-4">Name & Email</th>
                                <th class="py-3 px-4">Phone / Mobile</th>
                                <th class="py-3 px-4">Company / Subject / Service</th>
                                <th class="py-3 px-4">Message</th>
                                <th class="py-3 px-4">File</th>
                                <th class="py-3 px-4">Date</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            @foreach ($leads as $lead)
                                <tr class="hover:bg-gray-50 transition">
                                    <td class="py-3 px-4 font-mono font-medium text-gray-500">#{{ $lead->id }}</td>
                                    <td class="py-3 px-4">
                                        @if ($lead->form_type === 'contact')
                                            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-800">Contact</span>
                                        @else
                                            <span class="px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-800">Footer</span>
                                        @endif
                                    </td>
                                    <td class="py-3 px-4">
                                        <p class="font-bold text-gray-900">{{ $lead->name }}</p>
                                        <a href="mailto:{{ $lead->email }}" class="text-xs text-blue-600 hover:underline">{{ $lead->email }}</a>
                                    </td>
                                    <td class="py-3 px-4 text-gray-700">
                                        {{ $lead->phone ?: $lead->mobile ?: '—' }}
                                    </td>
                                    <td class="py-3 px-4 text-gray-700">
                                        @if ($lead->company)
                                            <div class="text-xs font-semibold text-gray-600"><i class="fa-solid fa-building text-gray-400 mr-1"></i>{{ $lead->company }}</div>
                                        @endif
                                        @if ($lead->subject)
                                            <div class="text-xs text-gray-900 font-medium">{{ $lead->subject }}</div>
                                        @endif
                                        @if ($lead->service)
                                            <div class="text-xs text-yellow-700 font-medium">{{ $lead->service }}</div>
                                        @endif
                                        @if (!$lead->company && !$lead->subject && !$lead->service)
                                            <span class="text-gray-400">—</span>
                                        @endif
                                    </td>
                                    <td class="py-3 px-4 text-gray-600 max-w-xs truncate" title="{{ $lead->message }}">
                                        {{ $lead->message ?: '—' }}
                                    </td>
                                    <td class="py-3 px-4 text-gray-600">
                                        @if ($lead->file_path)
                                            <a href="/storage/{{ $lead->file_path }}" target="_blank" class="text-blue-600 hover:underline inline-flex items-center gap-1 text-xs">
                                                <i class="fa-solid fa-paperclip"></i> View
                                            </a>
                                        @else
                                            <span class="text-gray-400">—</span>
                                        @endif
                                    </td>
                                    <td class="py-3 px-4 text-gray-500 text-xs whitespace-nowrap">
                                        {{ $lead->created_at ? $lead->created_at->format('M d, Y H:i') : '—' }}
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @endif
        </div>
    </main>
</body>
</html>
