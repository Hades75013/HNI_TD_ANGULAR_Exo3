import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  currentTime: string = '';

  ngOnInit(): void {
    // Vérifier si l'on est dans un environnement navigateur (côté client)
    if (typeof window !== 'undefined') {
      this.updateTime();
      setInterval(() => {
        this.updateTime();
      }, 1000); // Met à jour toutes les secondes uniquement côté client
    }
  }
  
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleString(); 
  }
}
