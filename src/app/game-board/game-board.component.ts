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
    for (let i = 0; i < 15 * 15; i++) {
      this.board.push({ value: null, type: 'empty' });
    }
  }

  getTopPosition(index: number): string {
    return `${Math.floor(index / 15) * (100 / 15)}%`;
  }

  getLeftPosition(index: number): string {
    return `${(index % 15) * (100 / 15)}%`;
  }

  onTileClick(index: number): void {
    console.log(`Tile ${index} clicked`);
    // เพิ่มการประมวลผลเมื่อไทล์ถูกคลิก
  }

  onBoardClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
