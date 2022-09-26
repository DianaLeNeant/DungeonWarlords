import { BoardProps } from 'boardgame.io/dist/types/packages/react';
import { Board } from "./Board";

import { Grid, Paper } from '@mui/material';

export const BoardDrawing = ({ ctx, G, moves } : BoardProps<Board>) => {
  const onClick = (id) => {
    console.log(id);
    moves.clickCell(id);
    console.log(G.cells);
  };

  const cellStyle : any = {
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  };

  return (
    <Paper sx={
      {
        maxWidth: '300px'
      }
    }>
      <Grid container id='board' spacing={0}>
      {G.cells
        .map((cell, id) => {
          console.log(cell);
          return (<Grid key={id} xs={4}>
                    <button style={ cellStyle } onClick={() => onClick(id)} disabled={cell != null}>
                        {cell}
                    </button>
                  </Grid>)
        }
      )}
      </Grid>
      {ctx.gameover ?
        ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        ) : (
          <div id="winner"></div>
        )}
    </Paper>
  );
};