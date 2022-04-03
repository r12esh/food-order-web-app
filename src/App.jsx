import React, {useState} from 'react';
import HomePage from "./components/HomePage";
import CheckOutPage from "./components/CheckOutPage";
import {OrderContext} from "./Context/OrderContext";
import {BrowserRouter, Switch, Route} from "react-router-dom";


const App = () => {

  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider value={{orders, setOrders}}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/checkout"} component={CheckOutPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    </OrderContext.Provider>

  );
};

export default App;
