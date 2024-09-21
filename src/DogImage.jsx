// @ts-check
import React from 'react';

/**
 * @param {{ imageUrl: string }} props
 */
export const DogImage = ({ imageUrl }) => {
  return (
    
    <img src= {imageUrl} className='dogImage'/>
    
  );
}

export default DogImage;
