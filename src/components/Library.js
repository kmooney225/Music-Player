import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ audioRef, songs, setCurrentSong, isPlaying, setSongs, libraryStatus}) => {
    return(
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
        <h2>Library</h2>
        <div className='library-song'>
            {songs.map((song) => (
                <LibrarySong 
                    audioRef={audioRef}
                    songs={songs}
                    song={song} 
                    setCurrentSong={setCurrentSong} 
                    id={song.id}
                    key={song.id}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                />
            ))}
        </div>
    </div>
    );
};

export default Library;