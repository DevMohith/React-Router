import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
 
import Home from "./components/Home/Home.jsx";
import About from "./components/About/about.jsx";
import Products from "./components/Products/Products.jsx";
import Info from "./components/About/info/Info.jsx";
import Offers from "./components/About/offers/Offers.jsx";
import Button from "./components/Button/Button.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
 
const App = () => {
  //is user logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
 
  // Track favorite products
  const [favorites, setFavorites] = useState([]);
 
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoggedIn(!loggedIn);
      setLoading(false);
    }, 2000);
  };
 
  // Function to toggle favorite
  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };
 
  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">The Clothing Company</h1>
        <NavLink data-testid="Home_Link" to="/">Home</NavLink>
        <NavLink data-testid="About_Link" to="/about">About</NavLink>
        <NavLink data-testid="Product_Link" to="/products">Products</NavLink>
        <span data-testid="Favorites_Link" to="#">
        ❤️ ({favorites.length})
        </span>
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
        <Route path="/about" element={<About />}>
          <Route path="info" element={<Info />} />
          <Route path="offers" element={<Offers />} >
            <Route path=":id/:type" element={<ProductDetails />} />
          </Route>
        </Route>
        {loggedIn && (
          <Route path="/products/:id/:type" element={<ProductDetails />} />
        )}
        <Route
          path="/products"
          element={
            <Products
              isUserLoggedIn={loggedIn}
              isLoading={isLoading}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="*" element={<h4 className="error">Route Not Found</h4>} />
      </Routes>
    </div>
  );
};
 
export default App;