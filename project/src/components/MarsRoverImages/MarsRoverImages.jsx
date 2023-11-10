import { useState, useEffect } from 'react';
import axios from 'axios';
import './MarsRoverImages.css';
import React from 'react';

export const API_KEY = 'zfpIuVyYaaKZETKqwLOst2vKrFubJaL4f0usFq7B'

export const fetchRoverImages = async () => {
  try {
    const response = await axios.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
      {
        params: {
          sol: 1000,
          api_key: API_KEY,
          page: 1,
          per_page: 10,
        },
      }
    );
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const MarsRoverImages = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchRoverImages();
          setImages(data);
        } catch (error) {
          // Handle error
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="gallery">
        <h1 className="heading">Mars Rover Photos</h1>
        <div className="horizontal-scroller">
        {images.length > 0 && (
        images.map((image, index) => (
          <div className="image-container" key={index}>
            <img
              src={image.img_src}
              alt={`Mars Rover ${index}`}
              style={{ width: '200px', height: '200px' }}
            />
          </div>
        ))
      )}
        </div>
      </div>
    );
  };

  export default MarsRoverImages;