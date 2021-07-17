import React, { useState, useEffect } from "react";
import {
  StoriesContainer,
  StoriesInfo,
  StoriesHeading,
  StoriesMasonry,
} from "./styles";
const Stories = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async (max) => {
      for (let i = 1; i <= max; i++) {
        let image = await fetch(`https://source.unsplash.com/random/${i}`);
        let urlImage = image.url;
        setImages((imgArray) => [...imgArray, urlImage]);
      }
    };
    getImages(10);
  }, []);

  return (
    <StoriesContainer>
      <StoriesInfo>
        <StoriesHeading>Historias</StoriesHeading>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
      </StoriesInfo>
      <StoriesMasonry>
        {images?.map((image, index) => (
          <img src={image} key={index} alt="images" />
        ))}
      </StoriesMasonry>
    </StoriesContainer>
  );
};

export default Stories;
