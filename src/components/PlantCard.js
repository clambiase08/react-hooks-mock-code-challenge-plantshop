import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, OnUpdatePlant }) {
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

  function handlePriceChange(event) {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: parseFloat(event.target.innerText),
      }),
    }).then((res) => res.json());
    OnUpdatePlant(plant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: 
        <div onInput={handlePriceChange} contentEditable="true">{plant.price}</div>
      </p>
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
