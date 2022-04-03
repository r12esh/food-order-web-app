import React from 'react';
import SideMenu from "./SideMenu";
import FoodMenu from "./FoodMenu";
import OrderColumn from "./OrderColumn";


const HomePage = () => {
  return (
    <div className="Home-Page">
      <SideMenu/>
      <FoodMenu/>
      <OrderColumn/>
    </div>
  )
    ;
};

export default HomePage;