import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "player 1",
      gameState: "playing"
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    return state;
  }

  handleClickCell(i) {
    if (this.state.cells[i] === null)
    {
      const ncells = [...this.state.cells];
      let player = "player 1";
      if (this.state.currentPlayer === "player 1")
      {
        ncells[i] = "X";
        player = "player 2";
      }
      else
        ncells[i] = "O";
      this.setState({cells: ncells, currentPlayer: player, gameState: this.updateGameStatus(ncells)});
    }
  }

updateGameStatus(ncells){
    const board = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    if (this.isWin("X", board, ncells))
      return "winner: player one";
    else if (this.isWin("O", board, ncells))
      return "winner: player 2";
    else
    {
      let stale = true;
      for (let e of ncells){
        if (e === null)
          stale = false;
      }
      if (stale)
        return "stale";
    }
    return "playing";
  }

  isWin(char, board, ncells){
    for (let i of board)
    {
      let res = 0;
      for (let j of i)
      {
        if (ncells[j] === char)
          res++;
        if (res === 3)
          return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo gameState={this.state.gameState} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} onClickCell={cellIndex => this.handleClickCell(cellIndex)} />
      </div>
    );
  }
}

export default GameLayout;
