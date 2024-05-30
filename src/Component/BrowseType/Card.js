const Card = ({ name, image, id }) => {
  return (
    <div className="card-container">
      <div className="card-title"> {name} </div>
      <img className="card-image" src={image} alt="" />
    </div>
  );
};

export default Card;
