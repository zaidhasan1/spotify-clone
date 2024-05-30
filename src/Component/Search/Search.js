import { useEffect, useState } from "react";
import BrowseType from "../BrowseType/BrowseType";
import Album from "../Playlist/Album";
import "./search.css";
import random from "../../utils/random";
const category = require("../../_mock/categories.json");
const datas = require("../../_mock/data.json");
const artist = require("../../_mock/artist.json");

const Search = ({ searchValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchValue) {
      let s = String(searchValue).toLowerCase();
      let ne = [];
      let expression = new RegExp(s, "gi");
      datas.forEach((obj, ind) => {
        obj.tracks.forEach((obj1, ind1) => {
          if (String(obj1.songName).match(expression)) {
            ne.push(obj1);
          }
        });
      });
      setData(ne);
    } else {
      setData([]);
    }
  }, [searchValue]);

  return (
    <div className="main-playlist-header">
      <div className="heading" style={{ marginBottom: "20px" }}>
        <div className="title" style={{ marginLeft: "15px" }}>
          {searchValue}
        </div>
      </div>
      <div style={{ overflow: "hidden !important" }}>
        {data.length ? (
          data.map((obj, ind) => {
            return (
              <div className="show-all-body">
                <Album
                  albumName={obj.songName}
                  albumArtist={artist[random(0, artist.length - 1)]}
                  key={ind}
                  albumImage={`/images/images(${random(0, 268)}).jpg`}
                  songUrl={obj.songUrl}
                />
              </div>
            );
          })
        ) : (
          <BrowseType data={category} />
        )}
      </div>
    </div>
  );
};

export default Search;
