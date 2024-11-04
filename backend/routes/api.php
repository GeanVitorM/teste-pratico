<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth:sanctum'])->group(function () {
    Route::apiResource('transactions', TransactionController::class);
});
