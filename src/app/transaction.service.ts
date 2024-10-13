import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsUrl = 'assets/transactions.json';
  //private idsUrl = 'assets/id.json';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any> {
    return this.http.get<any>(this.transactionsUrl);
  }

  /*getIds(): Observable<any> {
    return this.http.get<any>(this.idsUrl);
  }*/
}
