import React, {useState} from 'react';

const FoodCard = ({itemName, weight, rating, price, photo, liked, key}) => {

  const [likedBool, setLikedBool] = useState(liked)


  const cardHeader = (rating) => {
    return (
      <div className="card-header">
        <div className="rating-box">
          <p className="bi-star-fill rating-element-star rating-element" style={{color: "#FCD433"}}/>
          <p className="rating-element-value rating-element" style={{color: "white"}}>{rating}</p>
        </div>
        <div
          className="like-box"
          onClick={() => setLikedBool(!likedBool)}
        >
          {likedBool ? <i className="like-element-heart liked bi-heart-fill"/> :
            <i className="bi-heart like-element-heart"/>}
        </div>
      </div>
    )
  }

  const cardFooter = (itemName, weight, price) => {
    return (
      <div className="card-footer">
        <div className="card-title">
          <div className="card-item-name">
            {itemName}
          </div>
          <div className="weight">
            {weight}g
          </div>
        </div>
        <p className="price">
          ₹{price}
        </p>
      </div>
    )
  }

  return (
    <div key={key} className="card" style={{backgroundImage: `url(${photo})`}}>
      {cardHeader(rating, likedBool)}
      {cardFooter(itemName, weight, price)}
    </div>
  );
};

export default FoodCard;