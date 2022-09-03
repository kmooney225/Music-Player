import React from 'react';

const Song = ({currentSong, isPlaying, setIsPlaying}) => {

    return(
        <div className="song-container">
            <img src={currentSong.cover} alt="" className={isPlaying ? 'rotate-cover' : ''}/>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    );
};

export default Song;