
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  board: string[] = [
    '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
    '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
    ...Array(32).fill(''),
    '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
    '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
  ];

  selectedPieceIndex: number | null = null;

  getSquareColor(index: number): string {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0 ? 'white' : 'black';
  }

  
  selectPiece(index: number): void {
    if (this.board[index] !== '') {
      this.selectedPieceIndex = index;
      this.highlightSelectedSquare(index); 
    }
  }

  highlightSelectedSquare(index: number): void {
    
    const squares = document.querySelectorAll('.square');
    squares.forEach((square: any) => {
      square.classList.remove('selected');
    });
    const selectedSquare = squares[index];
    if (selectedSquare) {
      selectedSquare.classList.add('selected');
    }
  }

  
  movePiece(index: number): void {
    if (this.selectedPieceIndex !== null && this.board[index] === '') {
      
      this.board[index] = this.board[this.selectedPieceIndex];
      
      this.board[this.selectedPieceIndex] = '';
      
      this.selectedPieceIndex = null;
    }
  }

  
  onSquareClick(index: number): void {
    if (this.selectedPieceIndex === null) {
      this.selectPiece(index);
    } else {
      this.movePiece(index);
    }
  }

  
}

