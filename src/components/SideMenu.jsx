import React from 'react';

const SideMenu = () => {

  const menuButton = () => {
    return (
      <div className="side-menu-button">
        <div className="bi-menu-button-wide side-menu-button-icon"/>
        <div>MENU</div>
      </div>
    )
  }
  const cartButton = () => {
    return (
      <div className="side-menu-buttons">
        MY CART
      </div>
    )
  }

  const sideMenuList = () => {
    return (
      <div className="side-menu-list">
        {menuButton()}
        {/*{cartButton()}*/}
      </div>
    )
  }

  return (
    <div className="Side-Menu">
      {sideMenuList()}
    </div>
  );
};

export default SideMenu;