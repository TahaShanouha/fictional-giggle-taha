import { useState } from 'react';

import './App.css';
import {
  readPlayers,
} from './readPlayers'
import PlayerList from './components/PlayerList';

function App() {

  const [players, setPlayers] = useState([]);
  const [timestamp, setTimestamp] = useState();
  const [loading, setLoading] = useState(false);


  const getPlayers = async (source) => {
    const rightNow = new Date();
    setTimestamp(`Data last changed: ${rightNow.toLocaleTimeString()}`);

    let players = await readPlayers(source);
    setPlayers(players);
    setLoading(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="last-accessed">{timestamp}</span>
        <div className='container'>
          <div className='buttons'>
            <button onClick={() => { setLoading(true); getPlayers('json') }}>
              Load Players Json
            </button>
            <button onClick={() => {setLoading(true);getPlayers('database')}}>
              Load Players DB
            </button>
            <button onClick={() => {setLoading(true);getPlayers('api')}}>
              Load Players API
            </button>
            <button onClick={() => { setTimestamp(''); setPlayers([]); }}>
              Clear Players
            </button>
          </div>
          {!loading && (
            <PlayerList players={players} />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
