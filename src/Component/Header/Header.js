import LeftArrowHomeSvg from "../../ImageComponent/LeftArrowHomeSvg";
import RightArrowHomeSvg from "../../ImageComponent/RightArrowHomeSvg";
import SearchSvg from "../../ImageComponent/SearchSvg";
import "./header.css";

const Header = ({
  backgroundColor = null,
  isCategoryVisible = false,
  leftClick = () => {},
  rightClick = () => {},
  isSearch = false,
  searchValue = () => {},
}) => {
  return (
    <>
      <div className={`header-container ${backgroundColor}`}>
        <div className="header-container-secondary">
          <div className="image-parent">
            <div className="icon-image" onClick={leftClick}>
              <LeftArrowHomeSvg />
            </div>
            <div className="icon-image" onClick={rightClick}>
              <RightArrowHomeSvg />
            </div>
            <div>
              {isSearch ? (
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={(e) => searchValue(e.target.value)}
                  />
                  <div className="search-icon">
                    <SearchSvg />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          {isCategoryVisible ? (
            <div className="music-category">
              <div className="active">All</div>
              <div>Music</div>
              <div>Podcast</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
