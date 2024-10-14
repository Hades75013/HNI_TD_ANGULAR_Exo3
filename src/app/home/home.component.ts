import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionService} from '../services/transaction.service';
import {HttpClientModule} from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  transactions: any[] = [];
  sortDirection = true; // True = Ascendant, False = Descendant

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

 // Méthode de tri
  sortBy(column: string): void {
    this.sortDirection = !this.sortDirection;
    const direction = this.sortDirection ? 1 : -1;
    this.transactions.sort((a: any, b: any) => (a[column] > b[column] ? direction : -direction));
  }

  viewDetails(id: string): void {
    this.router.navigate(['/transaction-detail', id]); // Redirige vers la page de détail avec l'ID de la transaction
  }
}
