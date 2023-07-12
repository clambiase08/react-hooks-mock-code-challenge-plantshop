import React, {useState} from "react";

function PlantCard({name, image, price}) {

  const [isInStock, setIsInStock] = useState(true);

  function toggleSoldOut() {
    setIsInStock(isInStock => !isInStock);
      }
  
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={toggleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
