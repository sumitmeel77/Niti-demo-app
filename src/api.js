const express = require('express');
const app = express();
const PORT = 3000;

app.get('/carousel-data', (req, res) => {
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

  res.json(carouselData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
