import React from 'react';
import {NavLink} from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import bask from "../Images/carts.png"
const Card = ({ id, title, image, price, rating }) =>{
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
          rating:rating,
        },
      });
    };
    return (
        <>
          <div className="col-md-4  col-10 mx-auto gx-5 card_div">
              <div className="card">
                  <img className="card-img-top" src={image} alt="Cardcap"/>
                  <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <h4 className="card-text">{price}</h4>
                  <div>
                   {Array(rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>🌟</span>
                    ))}
                  </div>
                  <div classname="mx-auto">
                  <span class="dropdown ms-2 my-2"></span>
                <div className="my-auto">
                  <button className="btn btn-outline-success rounded-3 p-1 " onClick={addToBasket}>Add to Basket</button>
                  <img onClick={addToBasket} className="cartimg" src={bask}/>
                </div>          
       
</div>
                  </div>
              </div>
           </div>
        </>
    );
}
export default Card;