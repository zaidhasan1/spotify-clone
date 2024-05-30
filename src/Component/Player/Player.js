import { useContext, useEffect, useState } from "react";
import "./player.css";
import { PlayerContext } from "../../Provider/PlayerProvider";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => {
  const { playingObj, playerUrl } = useContext(PlayerContext);

  const [currentSong, setCurrentSong] = useState("");

  useEffect(() => {
    if (playerUrl) {
      setCurrentSong(playerUrl);
    }
  }, [playerUrl]);

  return (
    <div className="player-container">
      <div className="first-container">
        <div className="song-info">
          <img src={playingObj?.image} alt="Song Thumbnail" className="song-thumbnail" />
          <div className="text-container">
            <div className="song-title">{playingObj?.title}</div>
            <div className="song-artists">{playingObj?.artist}</div>
          </div>
          <div className="icon-container">
            <div className="add-icon">+</div>
          </div>
        </div>
      </div>
      <div className="second-container">
        <AudioPlayer src={currentSong} onPlay={() => {}} />
      </div>
      <div className="third-container"></div>
    </div>
  );
};

export default Player;
