import React,{ useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch,Redirect  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import { isUserLoggedIn } from "./redux/userSlice";
// import Modal from "./components/Modal";


function App() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.authenticated) {
      dispatch(isUserLoggedIn());
    }
  }, [user.authenticated]);
  return (
    <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" ><Redirect to="/"/></Route>
          <Route path="/details/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Default} />
        </Switch>
        {/* <Modal /> */}
      </React.Fragment>
  );
}

export default App;
