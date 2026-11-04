<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [
        'form_type',
        'name',
        'email',
        'mobile',
        'phone',
        'company',
        'subject',
        'service',
        'message',
        'file_path',
    ];
}
