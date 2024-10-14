import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommonModule} from '@angular/common';
import { TransactionService, Transaction } from '../services/transaction.service';

@Component({
  standalone: true,
  selector: 'app-transaction-detail',
  imports: [CommonModule],
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})

export class TransactionDetailComponent implements OnInit {
  transactionDetail: Transaction | null = null;

  constructor(
    private route: ActivatedRoute, 
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    const transactionId = this.route.snapshot.paramMap.get('id');
    if (transactionId) {
      this.transactionService.getTransactionDetails(transactionId).subscribe((data) => {
        this.transactionDetail = data;
      });
  }
}
}