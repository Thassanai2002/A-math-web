import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  board: { value: string | number | null, type: string }[] = [];

  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    // สร้างกระดานขนาด 15x15
    for (let i = 0; i < 15 * 15; i++) {
      this.board.push({ value: null, type: 'empty' });
    }
  }
}
