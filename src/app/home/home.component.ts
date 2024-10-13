import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionService} from '../transaction.service';
import {HttpClientModule} from '@angular/common/http'; // Importez HttpClientModule ici

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  transactions: any[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  sortTransactions(criteria: string) {
    this.transactions.sort((a, b) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });
  }
}
