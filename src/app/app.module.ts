import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import {ClockComponent} from './clock/clock.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionDetailComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
