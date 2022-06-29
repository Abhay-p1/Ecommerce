import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Components/StateProvider";
import { getBasketTotal } from "../../Components/reducer";
import { useNavigate } from "react-router-dom";
import proceed from "../../Components/Images/subnow2.webp"
const Subtotal = ()=> {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       
      <button onClick={e=>history("/payment")} className="">Proceed to Checkout</button>
      <img  src={proceed}/>
    </div>
  );
}

export default Subtotal;