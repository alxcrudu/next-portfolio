import React, {useState} from "react";
import Image from "next/image";
import andme from "../assets/artworks/andme.jpg"

export default function MusicPlayer() {
    const [volume, setVolume] = useState(20);
    const [time, setTime] = useState(0);

    const handleVolume = (event, newValue) => {
      setVolume(newValue);
    };
    const handleTime = (event, newValue) => {
      setTime(newValue);
    };
  
  return (
    <>
      <div className="player">
        <Image className="cover" src={andme} alt="cover" />
        <h2 className="track-title">And me</h2>
        <span className="artist-name">AKRA</span>
        <div className="timeline-slider">
          <div className="timeline">
            <small className="time">0:00</small>
            <small className="fulltime">3:20</small>
          </div>
          <div className="range-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={time}
              className="slider"
              onChange={handleTime}
            />
            <div className="slider-thumb"></div>
            <div className="progress"></div>
          </div>
        </div>
        <div className="volume-slider">
          <div className="volume-icon">
            <span className="material-symbols-outlined">volume_down</span>
          </div>
          <div className="range-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              className="slider"
              onChange={handleVolume}
            />
            <div className="progress"></div>
          </div>
        </div>
        <div className="controls">
          <button className="btn" id="btnPrev">
            <span className="material-symbols-outlined">fast_rewind</span>
          </button>
          <button className="btn btn-main" id="mainPlayBtn">
            <span className="material-symbols-outlined">play_arrow</span>
          </button>
          <button className="btn" id="btnNext">
            <span className="material-symbols-outlined">fast_forward</span>
          </button>
        </div>
      </div>
      <audio id="audio" hidden>
        <source src="/assets/songs/andmeS.mp3" />
      </audio>
    </>
  );
}
