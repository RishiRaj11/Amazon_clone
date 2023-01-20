import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <Product
        id="12344"
        title="dddddddddw"
        price={1100}
        rating={5}
        image="https://www.rd.com/wp-content/uploads/2021/10/book-of-night-black-ecomm-via-amazon.jpg?fit=700,700"
      />
    </div>
  );
};

export default Home;
