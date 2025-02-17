import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(true); // Start as true
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume;

    // Try to autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(false);
      } catch (err) {
        console.log("Autoplay blocked:", err);
        setIsPlaying(false);
      }
    };

    playAudio();

    // Pause music when a video is played
    const handlePlayVideo = (event) => {
      if (event.target.tagName === "VIDEO") {
        audio.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("play", handlePlayVideo, true);
    return () => document.removeEventListener("play", handlePlayVideo, true);
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <button onClick={togglePlay} className="music-button">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="volume-slider"
      />
      <span className="music-button">
        {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </span>
    </div>
  );
};

export default BackgroundMusic;


/*pentru implementare : <BackgroundMusic src="/music.mp3" />*/