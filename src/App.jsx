import "./App.css";

import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/about.jsx";
import Products from "./components/Products/Products.jsx";
import Button from "./components/Button/Button.jsx";
//Nested Routes
import Info from "./components/About/info/info.jsx";
import Offers from "./components/About/offers/Offers.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx"

// To store the users actions we use useState hooks to store function data 
const App = () => {
    // Is user logged in
    const [loggedIn, setLoggedIn] = useState(false);
    // If we are in the Loading state
    const [isLoading, setLoading] = useState(false);

    const handleLogin = () => {
      setLoading(true)
      setTimeout(()=> {
        // Set the userLogged in to true
        setLoggedIn(!loggedIn);
        // set the loading to false
        setLoading(false)
        // in this 2 seconds we can show loading animation to users on UI
      }, 2000);
    };

  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">The Clothing Company</h1>
        {/* these are similar to anchor tags for navigation */}
        <NavLink data-testid="Home_Link" to="/">
          Home
        </NavLink>
        <NavLink data-testid="About_Link" to="/about">
          About
        </NavLink>
        <NavLink data-testid="Product_Link" to="/products">
          Products
        </NavLink>
        {/* React Button component */}
        <Button 
        value={loggedIn}
        handleLogin={handleLogin}
        isLoading={isLoading}
        displayTrue={"Logout"}
        displayFalse={"Login"}
        />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
        {/* dont use slashes befor path for child routes since it will wont append to parent */}
           <Route path="info" element={<Info />} />
           <Route path="offers" element={<Offers />}> 
             <Route path=":id/:type" element={<ProductDetails/>} />
           </Route>
        </Route>

                  {/* Conditional Redering for details page if only user logged in */}
        {loggedIn && (
          <Route path="/products/:id/:type" element={<ProductDetails />} />
        )}
        
        <Route path="/products" element={<Products isUserLoggedIn={loggedIn} isLoading={isLoading} />} />
        {/* wildcard route to show errors if user tries with undefined parameters*/}
        <Route path="*" element={<h4 className="error">Route Not Found</h4>} />
      </Routes>
    </div>
  );
};

export default App;
