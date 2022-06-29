import React ,{useState,useEffect} from 'react'
import { useStateValue } from "../../Components/StateProvider";
import CheckoutProduct from "../../Components/CheckoutProducts/CheckoutProducts";
import "./Payment.css"
import {Link,useNavigate} from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import Cart from "../../Components/Images/carts2.png";
import { getBasketTotal } from "../../Components/reducer";
import { db } from '../firebase';
import pay from "../../Components/Images/pay.jpg";
import pay2 from "../../Components/Images/pay2.jpg";
import bask from "../../Components/Images/carts2.png"
const Payment = () => {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [items,setItems] = useState({
    name:"Aj store items",
    price:getBasketTotal(basket)
  });
  // useEffect(() => {
  //     // generate the special stripe secret which allows us to charge a customer
  //     const getClientSecret = async () => {
  //         const response = await axios({
  //             method: 'post',
  //             // Stripe expects the total in a currencies subunits
  //             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
  //         });
  //         setClientSecret(response.data.clientSecret)
  //     }

  //     getClientSecret();
  // }, [basket])
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const amt = Math.round(getBasketTotal(basket) * 100);
    fetch(`http://localhost:5001/ecommercea-c3dcb/us-central1/api/payments/create?total=${amt}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [basket]);

  console.log('THE SECRET IS >>>', clientSecret)
  console.log('👱', user)

  const handleSubmit = async (event) => {
      // do all the fancy stripe stuff...
      event.preventDefault();
      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
              card: elements.getElement(CardElement)
          }
      }).then((paymentIntent) => {
          // paymentIntent = payment confirmation
            console.log(paymentIntent);
// message: "As per Indian regulations, only registered Indian businesses (i.e. sole proprietorships, limited liability partnerships and companies, but not individuals) can accept international payments. More info here: https://stripe.com/docs/india-exports"
            const actual_payment_Intent=paymentIntent.error.payment_intent;
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(actual_payment_Intent.id)
            .set({
                basket: basket,
                amount: actual_payment_Intent.amount,
                created: actual_payment_Intent.created
            })
          setSucceeded(true);
          setError(null)
          setProcessing(false)
          dispatch({
              type: 'EMPTY_BASKET'
          })
           
          history('/orders');
      })

  }

  const handleChange = event => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  }

  return (
      <div className='payment'>
          <div className='payment__container'>
              <h1>
              <img className="smallit" src={bask}/>
                  Checkout (
                      <Link className="removeline" to="/checkout">{basket?.length} items</Link>
                      )
              </h1>


              {/* Payment section - delivery address */}
              <div className='payment__section'>
                  <div className='payment__title'>
                      <h3>Delivery Address</h3>
                  </div>
                  <div className='payment__address'>
                      <p>{user?.email}</p>
                      <p>123 React Lane</p>
                      <p>Los Angeles, CA</p>
                  </div>
              </div>

              {/* Payment section - Review Items */}
              <div className='payment__section'>
                  <div className='payment__title'>
                      <h3>Review items and delivery</h3>
                  </div>
                  <div className='payment__items'>
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
          

              {/* Payment section - Payment method */}
              <div className='payment__section'>
                  <div className="payment__title">
                      <h3 classname="text-light text-center">Payment Method</h3>
                  </div>
                  <div className="payment__details">
                          {/* Stripe magic will go */}
                    <div class="row">
                          <div className="col-md-4">
                            <img className="setimg" src={pay}/>
                          </div>
                          <form className="formmine col-md-4" onSubmit={handleSubmit}>
                              <CardElement onChange={handleChange}/>

                              <div className='payment__priceContainer'>
                                  <CurrencyFormat
                                      renderText={(value) => (
                                          <h3 className="mt-4">Order Total: {value}</h3>
                                      )}
                                      decimalScale={2}
                                      value={getBasketTotal(basket)}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"$"}
                                  />
                                  <button className="btnedit mx-auto" disabled={processing || disabled || succeeded}>
                                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                  </button>
                              </div>

                                {/* Errors */}
                              {error && <div>{error}</div>}
                          </form>
                          <div className="col-md-4">
                            <img className="setimg" src={pay2}/>
                          </div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Payment
