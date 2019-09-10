import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("X should be able to make move", () => {
    const game = new Game();

    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("O should move after X", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("Player can click only on -", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("XXX win in 1 row", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "O", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("OOO win in 1 row", () => {
    const game = new Game();
    game.onClick(3);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(8);
    game.onClick(2);

    expect(game.getCells()).toEqual([
      "O", "O", "O",
      "X", "X", "-",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in last row", () => {
    const game = new Game();
    game.onClick(6);
    game.onClick(3);
    game.onClick(7);
    game.onClick(4);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "O", "O", "-",
      "X", "X", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });



  it("XXX in middle row", () => {
    const game = new Game();
    game.onClick(3);
    game.onClick(1);
    game.onClick(4);
    game.onClick(6);
    game.onClick(5);


    expect(game.getCells()).toEqual([
      "-", "O", "-",
      "X", "X", "X",
      "O", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in first column", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(6);


    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "X", "-", "-",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in second column", () => {
    const game = new Game();
    game.onClick(1);
    game.onClick(0);
    game.onClick(4);
    game.onClick(2);
    game.onClick(7);


    expect(game.getCells()).toEqual([
      "O", "X", "O",
      "-", "X", "-",
      "-", "X", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in third column", () => {
    const game = new Game();
    game.onClick(2);
    game.onClick(0);
    game.onClick(5);
    game.onClick(1);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "O", "O", "X",
      "-", "-", "X",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in first diognale", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    game.onClick(8);


    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "-", "X", "-",
      "-", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("XXX in second diognale", () => {
    const game = new Game();
    game.onClick(2);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(6);


    expect(game.getCells()).toEqual([
      "O", "O", "X",
      "-", "X", "-",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("is a tie", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(5);
    game.onClick(3);
    game.onClick(6);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);


    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "X", "X", "O",
      "O", "X", "O"
    ]);
    
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(true);
  });

  it("restart after tie", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(2);
    game.onClick(5);
    game.onClick(3);
    game.onClick(6);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);

    game.restart();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    
    //expect(game.getWinner()).toBe("-");
    //expect(game.isTie()).toBe(true);
  });

  it("restart after win (XXX in second diognale)", () => {
    const game = new Game();
    game.onClick(2);
    game.onClick(0);
    game.onClick(4);
    game.onClick(1);
    game.onClick(6);

    game.restart();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("Can't click after gameends", () => {
    const game = new Game();
    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    game.onClick(8);

    game.onClick(6);
    game.onClick(7);

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "-", "X", "-",
      "-", "-", "X"
    ]);
    
    expect(game.getTurn()).toBe("O");
    
  });
  
});
