import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, handleUpdatePlant }) {
  const plantDetails = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onDeletePlant={onDeletePlant}
        OnUpdatePlant={handleUpdatePlant}
      />
    );
  });

  return <ul className="cards">{plantDetails}</ul>;
}

export default PlantList;
