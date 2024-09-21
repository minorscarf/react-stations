// @ts-check
import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {

  const [url, setUrl] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogImages, setDogImages] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      setBreeds(data.message);
    })
  },[]);

  useEffect(() => {
    if(selectedBreed){
      setUrl(`https://dog.ceo/api/breed/${selectedBreed}/images/random/5`);
    }
  },[selectedBreed]);

  const GetDogImages = async () => {
    setError("");  // エラーメッセージをリセット
    if (url) {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("画像の取得に失敗しました");
        }
        const data = await response.json();
        setDogImages(data.message);  
    }
  };
  

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
      <button onClick={GetDogImages}> 表示</button>
      {selectedBreed && <p>Selected Breed: {selectedBreed}</p>} 
      <p style={{ color: "red" }}>{error}</p>
      <ul>
        {dogImages.map((dogImage, index) => (
          <li key={index}>
            <img src={dogImage} className="dogImage" alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DogListContainer
