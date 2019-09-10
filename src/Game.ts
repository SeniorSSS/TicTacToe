import { stringLiteral } from "@babel/types";

export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  player: XO = 'X';
  moveCount = 0;

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.player;
  }

  getWinner(): XO {
    //row check for winner
    if (this.cells[0] === this.cells[1]&&this.cells[1] === this.cells[2]&&this.cells[0]!== '-'){
      return this.cells[0];
    }
    if (this.cells[3] === this.cells[4]&&this.cells[4] === this.cells[5]&&this.cells[5]!== '-'){
      return this.cells[3];
    }
    if (this.cells[6] === this.cells[7]&&this.cells[7] === this.cells[8]&&this.cells[6]!== '-'){
      return this.cells[6];
    }

    //column check for winner
    if (this.cells[0] === this.cells[3]&&this.cells[3] === this.cells[6]&&this.cells[3]!== '-'){
      return this.cells[3];
    }
    if (this.cells[1] === this.cells[4]&&this.cells[4] === this.cells[7]&&this.cells[7]!== '-'){
      return this.cells[4];
    }
    if (this.cells[2] === this.cells[5]&&this.cells[5] === this.cells[8]&&this.cells[8]!== '-'){
      return this.cells[5];
    }

    if (this.cells[0] === this.cells[4]&&this.cells[4] === this.cells[8]&&this.cells[8]!== '-'){
      return this.cells[0];
    }

    if (this.cells[2] === this.cells[4]&&this.cells[4] === this.cells[6]&&this.cells[6]!== '-'){
      return this.cells[2];
    }

    return "-";
  }

  isTie(): boolean {
    if (this.getWinner()==='-'&&this.cells.filter(i => i == '-').length===0){
      return true;
    }
      

    return false;
  }

  onClick(i: number): void {
if (this.getWinner()==='-') {

    if (this.cells[i] === '-') {
      if (this.player == 'X') { 
        this.cells[i] = 'X';
        this.player = 'O';
      } else {
        this.cells[i] = 'O';
        this.player = 'X';
      }
      this.moveCount++;
      this.getWinner();

        this.isTie();

    }
    
  }
}

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.player = 'X';
    
  }
}
