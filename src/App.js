import React, {useState} from 'react';
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import data from './components/utils';
import Library from './components/Library';

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying} 
      currentSong={currentSong}
     />
     <Library songs={songs} />
    </div>
  );
}

export default App;
