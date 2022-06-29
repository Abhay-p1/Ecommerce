import React from "react";
import "./Checkout.css";
import Subtotal from "../../Components/Subtotal/Subtotal";
import { useStateValue } from "../../Components/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProducts/CheckoutProducts";
import Navbar from "../../Components/Navbar/Navbar";
import Checkimg from "../../Components/Images/shop3.webp";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
    <Navbar/>
    <img
          className="checkout__ad"
          src={Checkimg}
          alt="Ignore The AD"
        />
    <div className="checkout">
      <div className="checkout__left">
        

        <div>
           <div className="row">
             <div className="col-md-8 text-align-center">
                 <h3 classname="move"><span className="heloo">Hello,</span> <span className="emailmy">{user?.email}</span></h3>
                 <h2 className="checkout__title">Your shopping Basket</h2>
             </div>
             <div className="col-md-4">
                <div className="checkout__right">
                  <Subtotal />
                </div>
             </div>
          </div>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

    </div>
    </>
  );
}

export default Checkout;