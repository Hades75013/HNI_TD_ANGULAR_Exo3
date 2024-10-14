import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component'; // Composant pour afficher les détails


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'transaction-detail/:id', component: TransactionDetailComponent }
];
