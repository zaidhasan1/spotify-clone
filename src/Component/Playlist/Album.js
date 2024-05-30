import { useContext, useState } from "react";
import PlaySvg from "../../ImageComponent/PlaySvg";
import { PlayerContext } from "../../Provider/PlayerProvider";

const Album = ({ albumName, albumImage, albumId, albumArtist , songUrl = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { updatePlayingObj, updatePlayerUrl } = useContext(PlayerContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const play = () => {
    updatePlayerUrl(songUrl);
    updatePlayingObj({
      image: albumImage,
      title: albumName,
      artist: albumArtist,
    });
  };

  return (
    <div className="album-main" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="album-img">
        <div
          className={`play-circle ${isHovered ? "transform" : ""} `}
          onClick={play}
          style={{ display: isHovered ? "block" : "none" }}
        >
          <PlaySvg fill="black" />
        </div>
        <img className="image-icon" src={albumImage} alt="" />
      </div>
      <div className="album-title">
        {String(albumName).length > 20 ? `${String(albumName).substring(0, 20)}...` : albumName}
      </div>
      <div className="album-artist">
        {String(albumArtist).length > 35 ? `${String(albumArtist).substring(0, 35)}...` : albumArtist}
      </div>
    </div>
  );
};

export default Album;
