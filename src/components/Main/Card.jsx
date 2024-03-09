const Card = ({ title, desc, image }) => {
    console.log(title);
  return (
    <div className="card">
      <div>
        <h1>{title} </h1>
      </div>

      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc} </p>
      </div>
    </div>
  );
};
export default Card;
