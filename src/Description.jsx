// @ts-check
import { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const url = "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg";
  const [dogUrl, setDogUrl] = useState(url);

  const randomDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      setDogUrl(data.message);
    })
    .catch(error => {
      console.log("error");
    });
  };
  return(
    <section>
      <DogImage imageUrl ={dogUrl}/> 
      <button onClick={randomDog} className='dogButton'>犬の画像を変更</button>
    </section>
  )
  
}

export default Description
