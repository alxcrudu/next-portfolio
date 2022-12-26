import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import andme from "../assets/artworks/andme.jpg";
import farkina from "../assets/artworks/farkina.jpg";

import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {FaBackward, FaForward} from "react-icons/fa";
import {MdVolumeDownAlt, MdVolumeUp} from "react-icons/md";
import { IconButton } from "@mui/material";

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
  }, [audio?.current?.loadedmetadata, audio?.current?.readyState])

  useEffect(() => {
    if (!!audio.current) {
      let adjustedVolume = volume / 100;
      audio.current.volume = adjustedVolume;
    }
  }, [audio, volume])

  useEffect(() => {
    if(isPlaying) audio.current.play();
    else audio.current.pause()
  }, [isPlaying])

  function togglePlayPause(){
    if(isPlaying) setIsPlaying(false);
    else setIsPlaying(true);
  }

  function formatDuration(e) {
      const min = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            sec = Math.floor(e % 60).toString().padStart(2,'0');
      return `${min}:${sec}`;
  }

  function changeRange() {
    audio.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  }

  function changeVolume() {
    setVolume(volumeBar.current.value);
  }

  function updateCurrentTime() {
    setCurrentTime(audio.current.currentTime);
  }
  
  function nextSong() {
    switch(index) {
      case 0:
        setIndex(1);
        setIsPlaying(false)
        setTimeout(() => {
          setIsPlaying(true)
        }, 500)
        break;
      case 1:
        setIndex(0);
        setIsPlaying(false)
        setTimeout(() => {
          setIsPlaying(true)
        }, 500)
        break;
      default:
        return;
    }
  }
  function prevSong() {
    switch(index) {
      case 0:
        setIndex(1);
        setIsPlaying(false)
        setTimeout(() => {
          setIsPlaying(true)
        }, 500)
        break;
      case 1:
        setIndex(0);
        setIsPlaying(false)
        setTimeout(() => {
          setIsPlaying(true)
        }, 500)
        break;
      default:
        return;
    }
  }

  const songs = [
    {
      art: farkina,
      audioSrc: "/farkinaS.mp3",
      artist: "AKRA",
      title: "Farkina Var"
    },
    {
      art: andme,
      audioSrc: "/andmeS.mp3",
      artist: "AKRA",
      title: "And Me"
    }
  ]

  // ! TO BE DONE: when song finishes automatically play next one

  return (
    <div className="music-player p-4 rounded-xl">
      <audio controls hidden ref={audio} onTimeUpdate={updateCurrentTime} src={songs[index].audioSrc}></audio>
      <div className="flex items-center">
        <Image className="rounded-xl w-28 mr-4" placeholder="blur" priority src={songs[index].art} alt="Song artwork"/>
        <div>
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
          <IconButton className="text" onClick={prevSong}>
            <FaBackward size={18} />
          </IconButton>
          <IconButton className="text" onClick={togglePlayPause}>
            {isPlaying 
              ? <BsPauseFill size={40} />
              : <BsFillPlayFill size={40} />
            }
          </IconButton>
          <IconButton className="text" onClick={nextSong}>
            <FaForward size={18} />
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
    </div>
  )
}