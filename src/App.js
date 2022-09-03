import React, {useState,useRef} from 'react';
import './styles/app.scss'
import Player from './components/Player';
import Song from './components/Song';
import data from './components/Data';
import Library from './components/Library';
import Nav from "./components/Nav"

function App() {

  const audioRef = useRef(null);


  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus,setLibraryStatus] = useState(false)
  const [darkMode,setDarkMode] = useState(false)

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    AnimationPercentage: 0,
  })

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation= Math.round((roundedCurrent / roundedDuration) * 100)

    setSongInfo({...songInfo, currentTime: current, duration, AnimationPercentage:animation})
  }

  const onEndedHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play()
  }
  

  return (
    <div className={`App ${darkMode ? 'dark-active' : "" }`}>  
      <div className={`App ${libraryStatus ? 'library-active' : "" }`}>
        <Nav 
          libraryStatus={libraryStatus} 
          setLibraryStatus={setLibraryStatus}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Song currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Player 
          audioRef={audioRef}
          setIsPlaying={setIsPlaying} 
          isPlaying={isPlaying} 
          currentSong={currentSong}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
        <Library 
          audioRef={audioRef} 
          songs={songs} 
          setCurrentSong={setCurrentSong} 
          isPlaying={isPlaying}
          setSongs={setSongs}
          libraryStatus={libraryStatus}
        />
        <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio}
          onEnded={onEndedHandler}
          >
        </audio>
      </div>
    </div>
  );
}

export default App;
