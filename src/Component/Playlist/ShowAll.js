import Album from "./Album";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import "./playlist.css";
import random from "../../utils/random";
import Player from "../Player/Player";
const datas = require("../../_mock/data.json");
const artist = require("../../_mock/artist.json");

const ShowAll = () => {
  const { albumId } = useParams();
  const findRecord = datas.find((a) => a.albumName === albumId);
  const data = findRecord !== undefined ? findRecord.tracks : [];

  return (
    <>
      <div className="main-container">
        <div>
          <Nav />
        </div>
        <div className="center-container">
          <Header isCategoryVisible={false} />
          <div style={{ padding: "10px 10px 10px 20px", marginTop: "20px" }}>
            <div className="main-playlist-header">
              <div className="heading" style={{ marginBottom: "20px" }}>
                <div className="title" style={{ marginLeft: "15px" }}>
                  Album Name
                </div>
              </div>
              <div style={{ overflow: "hidden !important" }}>
                {data.map((obj, ind) => {
                  return (
                    <div className="show-all-body">
                      <Album
                        albumName={obj.songName}
                        albumArtist={artist[random(0, artist.length)]}
                        key={ind}
                        albumImage={`/images/images(${random(0, 268)}).jpg`}
                        songUrl={obj.songUrl}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Player />
    </>
  );
};

export default ShowAll;
