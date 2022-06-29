import React ,{useEffect} from 'react';
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";
import Orders from "./Components/Orders/Orders";
import Footer from './Components/Footer';
import Electronics from './Components/alltypes/electronics'
import Grocery from './Components/alltypes/grocery'
import Fashion from './Components/alltypes/fashion'
import Furniture from './Components/alltypes/furniture'
import Cosmetics from './Components/alltypes/cosmetics'
import { useStateValue } from "./Components/StateProvider";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { auth } from "./Components/firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"
const promise = loadStripe("pk_test_51KCLz8SJzcNHdY9Y7wSUJpZemO9EiUBIv7XJT7MHfcormJD4xxyaChxJwXXcAMrZte7R8MwxeTzdr7RAmEyuT6pz00k19hVHES");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS ->", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/login"  element={<Login/>} ></Route>    
    <Route exact path="/checkout"  element={<Checkout/>} ></Route>
    <Route exact path="/payment"  element={<Elements stripe={promise}><Payment/></Elements>} ></Route>
    <Route exact path="/orders"  element={<Orders/>} ></Route>
    <Route exact path="/electronics" element={<Electronics/>}></Route>
    <Route exact path="/fashion" element={<Fashion/>}></Route>
    <Route exact path="/cosmetics" element={<Cosmetics/>}></Route>
    <Route exact path="/grocery" element={<Grocery/>}></Route>
    <Route exact path="/furniture" element={<Furniture/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
