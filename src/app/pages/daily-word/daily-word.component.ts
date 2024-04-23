import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-word',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './daily-word.component.html',
  styleUrl: './daily-word.component.scss'
})
export class DailyWordComponent {
  public qtdLetters: number = 4;
  public router = inject(Router);
}
