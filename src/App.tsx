import './App.css';

import { Client } from 'boardgame.io/react';
import { AdvancedWarlords } from './AdvancedWarlords/AdvancedWarlords';
import { BoardDrawing } from './AdvancedWarlords/Drawing';

const client = Client({
  game: AdvancedWarlords,
  board: BoardDrawing
});

const App = client;

export default App;
