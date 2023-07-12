import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()));

  const onAddPlant = newPlant => {
    setPlants([...plants, newPlant]);
      };

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants));
  },[])

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map(plant => {
      if (plant.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plant;
      }
    })
      setPlants(updatedPlants);
    }

    function handleDeletePlant(deletedPlant) {
          const updatedPlants = plants.filter(plant => plant.id !== deletedPlant.id);
          setPlants(updatedPlants);
        }


  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={searchedPlants} onDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
