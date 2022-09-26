import Game from 'boardgame.io';
import { Board } from './Board';
import { ClickCell, EndIf } from './Logic';

export const AdvancedWarlords : Game.Game<Board> = {
    setup: () => {
        return {
            cells: Array(9).fill(null)
        };
    },

    turn: {
        minMoves: 1,
        maxMoves: 1
    },

    moves: {
        clickCell: ClickCell
    },

    endIf: EndIf
};