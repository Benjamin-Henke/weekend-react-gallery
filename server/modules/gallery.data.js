const { Router } = require("express");

const galleryItems = [
    { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
    { id: 2, path: 'images/triforce.jpg', description: 'Symbol of the best video game series, Legend of Zelda.', likes: 0 },
    { id: 3, path: 'images/beach.jpg', description: 'Photo of Big Sur in California.', likes: 0 }
];

module.exports = galleryItems;