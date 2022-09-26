import Game from 'boardgame.io';
import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { Board } from "./Board";

const IsVictory = (cells : string[]) => {
    let positions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    let isRowComplete = (r : any) => {
        const symbols = r.map((i : number) => cells[i]);
        return symbols.every((i: any) => i !== null && i === symbols[0]);
    };

    return positions.map(isRowComplete).some(i => i === true);
};

const IsDraw = (cells : string[]) => {
    return cells.filter(c => c === null).length === 0;
};

export const ClickCell : Game.Move<Board> = (G: Board, ctx: Ctx, id: number) => {
    if (G.cells[id] != null)
        return INVALID_MOVE;
    
    G.cells[id] = ctx.currentPlayer;
    console.log(G.cells[id], id);
};

export const EndIf = (G: Board, ctx: Ctx) => {
    if (IsVictory(G.cells)) {
        return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
        return { draw: true };
    }
};