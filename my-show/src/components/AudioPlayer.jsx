import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ episode }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    setCurrentTime(seekTime);
    audioRef.current.currentTime = seekTime;
  };

  return (
    <div>
      <h2>Now Playing</h2>
      <audio
        ref={audioRef}
        src={episode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
      <p>{episode.title}</p>
      <div>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          value={currentTime}
          max={audioRef.current ? audioRef.current.duration : 0}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
