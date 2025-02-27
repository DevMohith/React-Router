import { Link, Outlet } from "react-router-dom";
import "./Offers.css";
import { useState } from "react";


export const products = [
  { id:1, title: "Hoodie", price: 21.99 },
  { id:2, title: "Sneakers", price: 34.99 },
  { id:3, title: "Tee", price: 12.99 },
];

const Offers = () => {
  const [items] = useState(products);

  return (
    <div className="offers" data-testid="offers">
      <h3>Latest Offers</h3>
      <div className="offer" style={{ borderBottem:"1px dotted lightgrey" }}>
        {items.map((item) => (
          <div key={item.title} data-testid="items_offers">
            <Link to={`${item.id}/${item.title}`}>
            <img src="https://placehold.co/350x200" alt="product" />
            </Link>
            <h4 data-testid="items_offers_title">{item.title}</h4>
            <p data-testid="items_offers_price">€{item.price}</p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
export default Offers;
