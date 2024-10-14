import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ClockComponent} from './clock/clock.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'exo3';
}
