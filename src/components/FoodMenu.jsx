import React, {useContext} from 'react';
import FoodCard from "./FoodCard";
import {foods} from "../foods";
import {OrderContext} from "../Context/OrderContext";

const FoodMenu = () => {

  const {orders, setOrders} = useContext(OrderContext)

  const addToOrders = (newFoodItem) => {
    const isAlreadyAdded = orders.findIndex((order) => {
      return order.id === newFoodItem.id
    })
    if (isAlreadyAdded !== -1) return;
    setOrders([...orders, {...newFoodItem, quantity: 1}])
  }

  const o = () => {

  }

  return (
    <div className="Food-Menu">
      <div className="food-menu-header">
        <div className="food-menu-filter-box">
          <i className="bi-filter"/>
          Filter
        </div>
        <div className="food-menu-sort-box">
          <p>Sorted by:</p>
          <span>Recommended</span>
          <i className="bi-chevron-down"/>
        </div>
      </div>


      <div className="food-menu-grid">
        {
          foods.map((foodObj, index) => {
            return (
              <div
                className="food-card-container"
                key={index}
                onClick={() => addToOrders(foodObj)}
              >
                <FoodCard {...foodObj}/>
              </div>
            )
          })
        }
      </div>
    </div>

  )
    ;
};

export default FoodMenu;