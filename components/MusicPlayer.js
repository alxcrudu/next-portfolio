import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { FaBackward, FaForward } from "react-icons/fa";
import { MdVolumeDownAlt, MdVolumeUp } from "react-icons/md";
import { IconButton } from "@mui/material";
import takeme from "../assets/artworks/takeme.png";
import heartbreak from "../assets/artworks/heartbreak.jpg";
import inside from "../assets/artworks/inside.png";
import night from "../assets/artworks/night.jpg";

export default function MusicPlayer() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(10);

  const audio = useRef();
  const progressBar = useRef();
  const volumeBar = useRef();

  useEffect(() => {
    const seconds = Math.floor(audio.current.duration);
    setDuration(seconds);
    progressBar.current.max - seconds;
  }, [audio?.current?.loadedmetadata, audio?.current?.readyState, index]);

  useEffect(() => {
    if (!!audio.current) {
      let adjustedVolume = volume / 100;
      audio.current.volume = adjustedVolume;
    }
  }, [audio, volume]);

  useEffect(() => {
    if(isPlaying) audio.current.play();
    else audio.current.pause();
  }, [isPlaying]);

  function togglePlayPause(){
    if(isPlaying) setIsPlaying(false);
    else setIsPlaying(true);
  };
  
  function formatDuration(e) {
    if(isNaN(e)){
      return "--:--"
    }
    const min = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
          sec = Math.floor(e % 60).toString().padStart(2,'0');
    return `${min}:${sec}`;
  };

  function changeRange() {
    audio.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };
  
  function changeVolume() {
    setVolume(volumeBar.current.value);
  };

  function updateCurrentTime() {
    setCurrentTime(audio.current.currentTime);
  };

  useEffect(() => {
    let roundDuration = Math.floor(currentTime)
    if (roundDuration == duration && isPlaying) {
      nextSong()
    }
  }, [currentTime]); // eslint-disable-line

  function reset(){
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true)
    }, 500);
  };

  function nextSong() {
    if(index === 3) {
      setIndex(0);
      reset();
    } else {
      const prev = index;
      setIndex(prev + 1);
      reset();
    }
  };

  function prevSong() {
    if(index === 0) {
      setIndex(3);
      reset();
    } else {
      const prev = index;
      setIndex(prev - 1);
      reset();
    }
  };

  const songs = [
    {
      art: takeme,
      audioSrc: "/songs/takeme.mp3",
      artist: "LEX",
      title: "Take Me By The Hand"
    },
    {
      art: inside,
      audioSrc: "/songs/inside.mp3",
      artist: "LEX",
      title: "Inside"
    },
    {
      art: night,
      audioSrc: "/songs/night.mp3",
      artist: "LEX",
      title: "Night And Day"
    },
    {
      art: heartbreak,
      audioSrc: "/songs/heartbreak.mp3",
      artist: "LEX",
      title: "Heartbreak"
    }
  ];

  return (
    <div className="music-player p-4 rounded-xl">
      <audio controls hidden ref={audio} onTimeUpdate={updateCurrentTime} src={songs[index].audioSrc}></audio>
      <div className="flex items-center">
        <Image className="rounded-xl w-28 mr-4" placeholder="blur" priority src={songs[index].art} alt="Song artwork"/>
        <div className="song-info">
          <h2 className="song-name | text-lg">{songs[index].title.toString()}</h2>
          <p className="artist | text font-light">{songs[index].artist.toString()}</p>
        </div>
      </div>
      <input
        className="slider slider-progress | mt-4 w-full"
        type="range"
        min="0"
        max={duration.toString()}
        value={currentTime.toString()}
        ref={progressBar}
        onChange={changeRange}
      />
      <div className="text text-xs flex justify-between">
        <p className="current">{formatDuration(currentTime).toString()}</p>
        <p className="duration">{(duration && !isNaN(duration)).toString() && formatDuration(duration-(Math.floor(currentTime))).toString()}</p>
      </div>
      <div className="flex justify-center">
        <div className="controls flex gap-4 text">
          <IconButton className="text music-btn" onClick={prevSong}>
            <FaBackward className="text" size={18} />
          </IconButton>
          <IconButton className="text music-btn" onClick={togglePlayPause}>
            {isPlaying 
              ? <BsPauseFill className="text" size={40} />
              : <BsFillPlayFill className="text" size={40} />
            }
          </IconButton>
          <IconButton className="text music-btn" onClick={nextSong}>
            <FaForward className="text" size={18} />
          </IconButton>
        </div>
      </div>
      <div className="text flex items-center gap-4 py-4 px-3">
        <MdVolumeDownAlt size={30} />
        <div className="w-full flex items-center">
          <input
            className="slider slider-volume w-full"
            type="range"
            min="0"
            max="100"
            value={volume.toString()}
            ref={volumeBar}
            onChange={changeVolume}
          />
        </div>
        <MdVolumeUp size={30} />
      </div>
      <p className="accent-text text-xs text-center font-light opacity-60">{t.f1}</p>
    </div>
  )
};