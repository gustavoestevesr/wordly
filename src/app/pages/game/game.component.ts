import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  public _snackBar = inject(MatSnackBar);
  public activatedRoute = inject(ActivatedRoute);

  private rows = 5;
  public grid: string[][] = [];
  public keyboard: string[] = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const qtdLetters = params['qtdLetters'];
      this.setGrid(Number(qtdLetters));
    });
  }

  setGrid(qtdLetters: number) {
    let row: string[] = [];
    for (let index = 0; index < this.rows; index++) {
      row.push('');
    }

    if (qtdLetters === 4) {
      this.grid = [row, row, row, row];
    } else if (qtdLetters === 5) {
      this.grid = [row, row, row, row, row];
    } else if (qtdLetters === 6) {
      this.grid = [row, row, row, row, row, row];
    }
  }

  addLetter(letter: string) {
    this.grid[0][0] = letter;
  }

  verifyWord() {
    this.openSnackBar('Owoooooo, you have kicked the word correctly!!!', 'X');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 10000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
