import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import GameOverlay from "./GameOverlay";

const BoardView = () => {
    const [board, setBoard] = useState(new Board());
  
    const handleKeyDown = (event) => {
      if (board.hasWon()) {
        return;
      }
  
      if (event.keyCode >= 37 && event.keyCode <= 40) {
        let direction = event.keyCode - 37;
        let boardClone = Object.assign(
          Object.create(Object.getPrototypeOf(board)),
          board
        );
        let newBoard = boardClone.move(direction);
        setBoard(newBoard);
      }
    };