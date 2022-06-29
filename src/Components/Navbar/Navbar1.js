import React, { useState } from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [fixed, setFixed] = useState(false);

  const toggle = () => {
    if (window.scrollY >= 30) {
      setFixed(true);
    } else setFixed(false);
  };

  window.addEventListener("scroll", toggle);
  return (
    <>
      <header className={`header ${fixed ? "fixed" : null}`}>
        <p className="Logo">Aj Store</p>
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
            <li onClick={handleAuthenticaton} className="header__option">
              <div className="header__optionLineOne">Hello</div>
              <div className="header__optionLineTwo">{user? 'Sign Out' : 'Sign In'}</div>
            </li>
            <li  className="header__option">
              <div className="header__optionLineOne">Your</div>
              <div className="header__optionLineTwo">Orders</div>
            </li>
            <li className="header_optionBasket header_optionLineOne">
              <AiOutlineShoppingCart fontSize="30px" color="white" />
            </li>
            <li className="header_optionLineTwo header_basketCount">{basket?.length} </li>
          </ol>
        </div>
        {/* <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Anubhav</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__optionBasket">
            <AiOutlineShoppingCart fontSize="30px" />
            <span className="header_optionLineTwo header_basketCount">0</span>
          </div>
        </div> */}
      </header>
    </>
  );
};

export default Navbar;