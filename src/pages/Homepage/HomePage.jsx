import React from "react";
import { Announcement } from "../../componets/Announcement/Announcement";
import Categories from "../../componets/Categories/Categories";
import { Footer } from "../../componets/Footer/Footer";
import Navbar from "../../componets/Navbarr/Navbar";
import Newsletter from "../../componets/NewsLetter/Newsletter";

import { Slider } from "../../componets/Slider/Slider";
import Products from "../../Products/Products";

const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
