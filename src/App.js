import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HXHgYKZPkbq3P8hT7Mktm7LLLty2SLKO3FbiZpFwNwAcTqEckiNvOMilpI06ioDlCySaP33hucm1pc1oMWOhfRK00QLTZMDEz"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //Will only run once the component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //The user is logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //The user is logged
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
