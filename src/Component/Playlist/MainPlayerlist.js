import "./playlist.css";
import Album from "./Album";
import { useNavigate } from "react-router-dom";
import random from "../../utils/random";

const artist = require("../../_mock/artist.json");

const MainPlaylist = ({ title, data = [], albumId }) => {
  const navigate = useNavigate();

  const showAll = () => {
    setTimeout(() => {
      navigate(`/a/${title}`);
    }, 500);
  };

  return (
    <div className="main-playlist-header">
      <div className="heading">
        <div className="title">{title}</div>
        <div className="show-all" onClick={showAll}>
          Show All
        </div>
      </div>
      <div className="main-body" style={{ overflow: "hidden !important" }}>
        {data.map((obj, ind) => {
          return (
            <Album
              albumName={obj.songName}
              albumArtist={artist[random(0, artist.length - 1)]}
              key={ind}
              albumImage={`/images/images(${random(0, 268)}).jpg`}
              songUrl={obj.songUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainPlaylist;
