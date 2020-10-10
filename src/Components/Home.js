import React from "react";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="bgPic"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG"
        ></img>

        <div className="home__row">
          <Product
            id="12"
            title="Gucci - Oversized Distressed Printed Cottn-Jersey T-shirt "
            price={486.99}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDJs2gXKaN2UaFjwuBNRVnsNtOGWBdhmScBdBG2jWHn0XnZ1zXQ8IxHm3TnnAV1-UOUML4Q-ubyKw&usqp=CAc"
          />
          <Product
            id="12345678"
            title="Macbook Air 13 in Retina"
            price={999.99}
            rating={5}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRM95MH371rtP5fRFzor8Io7bqi_EE6sh0gX4TCdH1fChULY2X7LulnoZUM-IP&usqp=CAc"
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            id="123"
            title=" Sony PlayStation 5 "
            price={599.99}
            rating={5}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/sol-64883-playstaion-5-console-flex-179131.jpg;maxHeight=460;maxWidth=460"
          />
          <Product
            id="1234567"
            title=" Marven "
            price={2599.99}
            rating={5}
            image="https://i.pinimg.com/564x/cb/07/f8/cb07f800ffb416c933bb54d0514b290e.jpg"
          />
          <Product
            id="1234"
            title="Spalding NBA Cross Court Official Basketball (29.5 in) "
            price={49.99}
            rating={5}
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRHrvQrI-YWv4L_SpVqE92dr6yZmJJr06SUGWVIAjD8W21V_3olUe-OZ3M9VO92V8uhZtK78F9RS-zX9TuPxrJ4GHiMQSK4b8IiLeKrqnh2&usqp=CAc"
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            id="123456"
            title="Apple
            iPhone 11 "
            price={699.99}
            rating={5}
            image="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/PRODUCT-RED/Apple-iPhone-11-PRODUCT-RED-frontimage.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
