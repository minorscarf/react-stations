// DO NOT DELETE

import { useState } from 'react';
import './App.css'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [dogUrl, setDogUrl] = useState(url);

  return (
    <header>
      イッヌ
      <img src={dogUrl}/>
      <button onClick={() => setDogUrl("https://images.dog.ceo/breeds/appenzeller/n02107908_3155.jpg")}></button>
    </header>
  )
}
