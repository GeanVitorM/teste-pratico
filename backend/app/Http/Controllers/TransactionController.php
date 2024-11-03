<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveTransactionRequest;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransactionController extends Controller
{
    public function index() : JsonResponse
    {
        $transactions = Transaction::latest() -> get();

        return response() -> json ($transactions, Response::HTTP_OK);
    }

    
    public function store(SaveTransactionRequest $request) : JsonResponse
    {
        $transaction = Transaction::create($request->validated());

        return response()->json($transaction, Response::HTTP_CREATED);
    }

    
    public function show(string $id) : JsonResponse
    {
        $transaction = Transaction::findOrFail($id);

        return response()->json($transaction, Response::HTTP_OK);
    }

    
    public function update(SaveTransactionRequest $request, string $id) : JsonResponse
    {
        $transaction = Transaction::findOrFail($id);

        $transaction -> update($request->validate());

        return response() -> json($transaction, Response::HTTP_OK);
    }

    public function destroy(string $id) : JsonResponse
    {
        $transaction = Transaction::findOrFail($id);

        $transaction -> delete();

        return response() -> json(null, Response::HTTP_NO_CONTENT);
    }
}
