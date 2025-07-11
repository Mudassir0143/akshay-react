

const RestaurantCard = ({resName,cusine,imageUrl,rating,deliveryTime}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={imageUrl}
      />
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      
    </div>
  );
};
export default RestaurantCard;