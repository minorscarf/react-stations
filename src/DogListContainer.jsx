// @ts-check
import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      setBreeds(data.message);
    })
  },[]);

  /**
   * @param {React.ChangeEvent<HTMLSelectElement>} event 
   */
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <section>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChange={handleBreedChange} 
      />
      <button> 犬の画像を表示</button>
      {selectedBreed && <p>Selected Breed: {selectedBreed}</p>} {}
    </section>
  );
}

export default DogListContainer
