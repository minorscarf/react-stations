// @ts-check
import { useEffect, useState } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {

  const [url, setUrl] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogImages, setDogImages] = useState([]);

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
    else{
      setUrl('https://dog.ceo/api/breed/${selectedBreed}/images/random/5');
    }
  },[selectedBreed]);

  const GetDogImages = async () => {
    try {
      const breed = selectedBreed || "akita";  // 犬種が選択されていない場合、デフォルトで "hound" を使用
      const url = `https://dog.ceo/api/breed/${breed}/images/random/5`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("画像の取得に失敗しました");
      }
      
      const data = await response.json();
      setDogImages(data.message);  // 取得した画像リストをセット
    } catch (error) {
      console.error("Error fetching images:", error);
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
