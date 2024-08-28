import { Component } from '@angular/core';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent {
  pieces: string[] = ['1', '2', '3', '+', '-', '*', '/'];

  onDragStart(event: DragEvent, piece: string): void {
    event.dataTransfer?.setData('text', piece);
  }
}
