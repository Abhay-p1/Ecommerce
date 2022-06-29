import React from "react";
import "./Products.css";
import { useStateValue } from "../../Components/StateProvider";
import bask from "../../Components/Images/addto2.webp"

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {/* <p>🌟</p> */}
      </div>

      <img src={image} alt="" />
      <div className="my-auto">
        <button onClick={addToBasket}>Add to Basket</button>
        <img onClick={addToBasket} className="cartimg" src={bask}/>
      </div>
    </div>
  );
}

export default Product;
