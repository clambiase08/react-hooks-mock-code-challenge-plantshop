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

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search setSearch={setSearch} search={search}/>
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
