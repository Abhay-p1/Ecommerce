import React, { useState } from "react";
import "./Navbar.css";
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from "react-router-dom";
import { useStateValue } from "../../Components/StateProvider";
import { auth } from "../../Components/firebase";
import Ajstore from "../../Components/Images/Screenshot (11).png"
const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [{basket,user},dispatch] = useStateValue();
  const toggle = () => {
    if (window.scrollY >= 30) {
      setFixed(true);
    } else setFixed(false);
  };
  window.addEventListener("scroll", toggle);

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <>
      <header className={`header ${fixed ? "fixed" : null}`}>
       <Link to="/"><Myimg ClassName="logo" src={Ajstore} alt="Aj Store" /></Link>
        {/* <div className="header__search">
          <input className="header__searchInput" type="text" />
          <BsSearch color="white" fontSize="30px" padding="5px" />
        </div> */}
        <div className="nav">
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <BsSearch color="white" fontSize="30px" padding="5px" />
          </div>
          <ol>
          <Link to={!user && "/login"}>
            <li onClick={handleAuthenticaton}  className="header__option">
              <div className="header__optionLineOne">Hello {!user?'Guest':user.email}</div>
              <div className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</div>
            </li>
            </Link>
            <Link to="/orders">
            <li className="header__option">
              <div className="header__optionLineOne">Returns</div>
              <div className="header__optionLineTwo">& Orders</div>
            </li>
            </Link>
            <Link to="/checkout">
            <li className="header_optionBasket header_optionLineOne">
              <AiOutlineShoppingCart fontSize="30px" color="white" />
            </li>
            <li className=" bg-secondary text-light fw-bold text-center header_optionLineTwo header_basketCount">{basket?.length}</li>
            </Link>
          </ol>
        </div>
      </header>
    </>
  );
};
const Myimg = styled.img`
width:230px; height:65px;
border:3px solid rgba(43, 87, 168, 0.931);
border-radius:8px;
box-shadow:5px 5px 15px -15px rgba(0,0,0,0.6);
&:hover{
  border:3px solid rgb(158, 157, 157);
}
`
export default Navbar;

