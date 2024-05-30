import Card from "./Card";
import "./browseType.css";

const BrowseType = ({ data }) => {
  return (
    <div>
      <div className="browse-all"> Browse All </div>
      {data.map((obj, ind) => {
        return <Card name={obj} key={ind} image={`/images/images(${ind + 20}).jpg`} id={ind} />;
      })}
    </div>
  );
};

export default BrowseType;
