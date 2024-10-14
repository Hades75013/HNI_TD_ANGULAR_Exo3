import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})

export class TransactionService {
  private transactionsUrl = 'assets/transactions.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTransactionDetails(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`assets/${id}.json`);
  }
}
