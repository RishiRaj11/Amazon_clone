import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
const Header = () => {
  //"http://pngimg.com/uploads/amazon/amazon_PNG11.png"
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="amazon_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Hello rishi</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/order" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo"> & Orders</span>
          </div>
        </Link>
        <Link to="/prime" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link" >
          <div className="header_optionBasket ">
            <ShoppingCartIcon />
            <span className="header_optionLineTwo header_optionBaskeCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
