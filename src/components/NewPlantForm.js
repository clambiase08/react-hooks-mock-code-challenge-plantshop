import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting new plant");
    const newPlant = {
      name: name, 
      image: image, 
      price: parseFloat(price)
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlant),
      })
      .then((res) => res.json())
      .then((newPlant) =>onAddPlant(newPlant))
      console.log(newPlant);
      setName("");
      setImage("");
      setPrice(0);
  };

  function handleChange(e) {
    const {name, value} = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "price") {
      setPrice(value);
    }
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={image}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={price}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
