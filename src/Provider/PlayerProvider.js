import { createContext, useState } from "react";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerUrl, setPlayerUrl] = useState("");
  
  const [playingObj, setPlayingObj] = useState({
    image: "https://i.scdn.co/image/ab67616d00004851cc3369a6b8b132d1950ff01e",
    title: "Aate jaate khoobsurate aware",
    artist: "Kishore kumar, Latamangeshkar",
  });

  const updatePlaying = (value) => {
    setIsPlaying(value);
  };

  const updatePlayingObj = (obj) => {
    setPlayingObj(obj);
  };

  const updatePlayerUrl = (url) => {
    setPlayerUrl(url);
  };

  return (
    <PlayerContext.Provider
      value={{ isPlaying, updatePlaying, playingObj, updatePlayingObj, playerUrl, updatePlayerUrl }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
