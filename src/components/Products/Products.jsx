import "./Products.css";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../const";
import { Link } from "react-router-dom";
 
const Products = ({ isUserLoggedIn, isLoading, favorites, toggleFavorite }) => {
  const [products, setProducts] = useState();
 
  useEffect(() => {
    if (isUserLoggedIn) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`${BASE_URL}/products`);
          const result = await response.json();
          console.log(result);
          setProducts(result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }
  }, [isUserLoggedIn]);
 
  if (isLoading) {
    return <Loader component={"Products"} />;
  }
 
  if (isUserLoggedIn) {
    return (
      <div className="content">
        <h3>Hoodies</h3>
        <div className="products">
          {products &&
            products.Hoodies.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Hoody`}>
                  <img src={p.image} alt="product" />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
                <button
                className="fav-button"
                onClick={() => toggleFavorite(p.id)}
                data-testid="login_button"  // ❌ REMOVE THIS! ❌
                >
                 {favorites.includes(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
            ))}
        </div>
 
        <h3>Tees</h3>
        <div className="products">
          {products &&
            products.Tees.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Tees`}>
                  <img src={p.image} alt="product" />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
                <button
                  className="fav-button"
                  onClick={() => toggleFavorite(p.id)}
                >
                  {favorites.includes(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
            ))}
        </div>
 
        <h3>Sneakers</h3>
        <div className="products">
          {products &&
            products.Sneakers.map((p) => (
              <div key={p.id}>
                <Link to={`/products/${p.id}/Sneakers`}>
                  <img src={p.image} alt="product" />
                </Link>
                <p style={{ textAlign: "center" }}>{p.name}</p>
                <button
                  className="fav-button"
                  onClick={() => toggleFavorite(p.id)}
                >
                  {favorites.includes(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="content" style={{ textAlign: "center" }}>
        Please Login To See Products
      </div>
    );
  }
};
 
export default Products;