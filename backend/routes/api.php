<?php

use App\Http\Controllers\LeadController;
use Illuminate\Support\Facades\Route;

Route::post('/footer-contact', [LeadController::class, 'storeFooter']);
Route::post('/contact', [LeadController::class, 'storeContact']);
Route::get('/leads', [LeadController::class, 'index']);
Route::delete('/leads/{id}', [LeadController::class, 'destroy']);
