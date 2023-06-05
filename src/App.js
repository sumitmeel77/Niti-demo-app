import React, { useState, useEffect } from 'react';

import Carousel from './demo';
export default function App() {
  const [code, setCode] = useState(`function Test () { return "hello"}`);
  const carouselData = [
    { title: 'Item 1', image: 'https://picsum.photos/id/237/200/300' },
    { title: 'Item 2', image: 'https://picsum.photos/id/239/200/300' },
    { title: 'Item 3', image: 'https://picsum.photos/id/238/200/300' },
    { title: 'Item 4', image: 'https://picsum.photos/id/235/200/300' },
    { title: 'Item 5', image: 'https://picsum.photos/id/237/200/300' },
    { title: 'Item 6', image: 'https://picsum.photos/id/236/200/300' },
    { title: 'Item 7', image: 'https://picsum.photos/id/235/200/300' },
    { title: 'Item 8', image: 'https://picsum.photos/id/234/200/300' },
    { title: 'Item 9', image: 'https://picsum.photos/id/233/200/300' },
    { title: 'Item 10', image: 'https://picsum.photos/id/232/200/300' },
    { title: 'Item 11', image: 'https://picsum.photos/id/231/200/300' },
  ];

  const pageSize = 3;
  // const [carouselData, setCarouselData] = useState([]);
  // const pageSize = 3;

  // useEffect(() => {
  //   axios.get('http://localhost:3000/carousel-data')
  //     .then(response => {
  //       setCarouselData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching carousel data:', error);
  //     });
  // }, []);
  return (
    <div>
      <h1 style={{ 'text-align': 'center' }}>Carousel Example</h1>
      <Carousel data={carouselData} pageSize={pageSize} />
    </div>
  );
}
