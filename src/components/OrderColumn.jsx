import React, {useContext} from 'react';
import {OrderContext} from "../Context/OrderContext";

const OrderColumn = () => {

  const {orders, setOrders} = useContext(OrderContext);

  const removeOrder = (order) => {
    setOrders(orders.filter(orderItem => orderItem.id !== order.id))
  }

  const increaseQuantity = (id) => {
    const index = orders.findIndex((order) => order.id === id)
    const ourOrders = [...orders]
    const orderToUpdate = {...ourOrders[index]};
    orderToUpdate.quantity += 1
    orderToUpdate.totalWeight = orderToUpdate.weight * orderToUpdate.quantity
    orderToUpdate.totalPrice = parseFloat(orderToUpdate.price * orderToUpdate.quantity)
    ourOrders[index] = orderToUpdate;
    setOrders(ourOrders);
  }
  const decreaseQuantity = (id) => {
    const index = orders.findIndex((order) => order.id === id)
    if (orders[index].quantity === 1) {
      return;
    }
    const ourOrders = [...orders]
    const orderToUpdate = {...ourOrders[index]};
    orderToUpdate.quantity -= 1
    orderToUpdate.totalWeight = orderToUpdate.weight * orderToUpdate.quantity
    orderToUpdate.totalPrice = parseFloat(orderToUpdate.price * orderToUpdate.quantity)
    ourOrders[index] = orderToUpdate;
    setOrders(ourOrders);
  }

  const orderColumnHead = () => {
    return (
      <div className="order-column-head">
        <div className="order-column-title">
          <h1>My Orders</h1>
          <p>Edit</p>
        </div>
        <div className="order-time">
          <i className="bi-clock-fill"/>
          <p>4:27 PM</p>
        </div>
        <hr/>
      </div>
    );
  };

  const orderCard = (order) => {
    return (
      <div className="order-card" key={order.id}>
        <div className="order-photo-box">
          <img className="order-photo" src={order.photo} alt=""/>
        </div>
        <div className="order-name-box">
          <div className="order-name">
            {order.itemName}
          </div>
          <div className="order-weight">
            {order.totalWeight ? order.totalWeight : order.weight}g
          </div>
        </div>
        <div className="order-quantity-changer-box">
          <div className="order-quantity-changer">
            <p onClick={() => (decreaseQuantity(order.id))}>-</p>
            <span>{order.quantity}</span>
            <p onClick={() => increaseQuantity(order.id)}>+</p>
          </div>
        </div>
        <div className="order-price">
          ₹{order.totalPrice ? order.totalPrice : order.price}
        </div>
        <div className="remove-order" onClick={() => removeOrder(order)}>
          <i className="bi-x"/>
        </div>
      </div>
    );
  }

  const orderList = (orderArray) => {
    return (
      <div className="order-list">
        {
          orderArray.map((order) => {
            return (
              orderCard(order)
            )
          })
        }
      </div>
    )
  }

  const dragDrop = () => {
    return (
      <div className="dashed-border-box">
        Drag & Drop
      </div>
    )
  }

  const totalCheckoutPrice = (orderArray) => {
    let finalPrice = 0;
    for (let order of orderArray) {
      finalPrice += order.totalPrice ? order.totalPrice : order.price;
    }
    return (
      <div className="total-checkout-price">
        <p>Total</p>
        <p>₹{finalPrice}</p>
      </div>
    )
  }

  const checkOutButton = () => {
    return (
      <div onClick={() => {
      }} className="checkout-button">
        Checkout
      </div>
    )
  }

  return (
    <div className="Order-Column">
      {orderColumnHead()}
      {orderList(orders)}
      {dragDrop()}
      {totalCheckoutPrice(orders)}
      {checkOutButton()}
    </div>
  );
};

export default OrderColumn;