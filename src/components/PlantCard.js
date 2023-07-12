import React, {useState} from "react";

function PlantCard({name, image, price}) {

  const [isSoldOut, setIsSoldOut] = useState(true);

  function toggleSoldOut() {
    setIsSoldOut(isSoldOut => !isSoldOut);
      }
  
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button onClick={toggleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
