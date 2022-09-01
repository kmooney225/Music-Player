import React, {useState} from 'react';
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import data from './components/utils';

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
