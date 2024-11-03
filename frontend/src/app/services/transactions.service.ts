import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private readonly API_URL = 'http://127.0.0.1:8000/';

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.API_URL}/transactions`);
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.API_URL}/transactions/${id}`);
  }

  createTransaction(data: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.API_URL}/transactions`, data);
  }

  updateTransaction(id: number, data: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.API_URL}/transactions/${id}`, data);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/transactions/${id}`);
  }
}
