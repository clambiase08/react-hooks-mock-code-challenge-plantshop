import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true);

  function toggleSoldOut() {
    setIsInStock((isInStock) => !isInStock);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    onDeletePlant(plant);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button onClick={toggleSoldOut} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={toggleSoldOut}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick} className="secondary">
        Delete Plant
      </button>
    </li>
  );
}

export default PlantCard;
