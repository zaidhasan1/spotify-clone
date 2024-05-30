import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import "./home.css";
import { useState } from "react";
import MainPlaylist from "../Playlist/MainPlayerlist";
import { PAGE } from "../../Enum";
import Album from "../Playlist/Album";
import Search from "../Search/Search";
import Player from "../Player/Player";
import random from "../../utils/random";

const datas = require("../../_mock/data.json");
const artist = require("../../_mock/artist.json");

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [currentPage, setCurrentPage] = useState(PAGE.HOME);
  const [searchValue, setSearchValue] = useState("");

  const onScroll = (e) => {
    let scrollTop = e.target.scrollTop;
    if (scrollTop > 100) {
      setBackgroundColor("mainColor");
    } else {
      setBackgroundColor("secondaryColor");
    }
  };

  const MainHome = () => {
    return (
      <>
        {datas.map((obj, index) => {
          return <MainPlaylist key={index} title={obj.albumName} data={obj.tracks} albumId={index} />;
        })}
      </>
    );
  };

  const ShowAll = () => {
    return (
      <div className="main-playlist-header">
        <div className="heading" style={{ marginBottom: "20px" }}>
          <div className="title" style={{ marginLeft: "15px" }}>
            Album Name
          </div>
        </div>
        <div style={{ overflow: "hidden !important" }}>
          {datas.map((obj, ind) => {
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
          })}
        </div>
      </div>
    );
  };

  const Views = () => {
    if (currentPage === PAGE.HOME) {
      return <MainHome />;
    } else if (currentPage === PAGE.SHOW_ALL) {
      return <ShowAll />;
    } else if (currentPage === PAGE.SEARCH) {
      return <Search searchValue={searchValue} />;
    }
  };

  return (
    <>
      <div className="main-container">
        <div>
          <Nav
            currentPage={(page) => {
              setCurrentPage(page);
            }}
          />
        </div>
        <div className="center-container" onScroll={onScroll}>
          <Header
            backgroundColor={backgroundColor}
            isCategoryVisible={currentPage === PAGE.SEARCH ? false : true}
            isSearch={currentPage === PAGE.SEARCH ? true : false}
            searchValue={(value) => {
              setSearchValue(value);
            }}
          />
          <div style={{ padding: "10px 10px 10px 20px" }}>
            <Views />
          </div>
        </div>
      </div>

      <Player />
    </>
  );
};

export default Home;
