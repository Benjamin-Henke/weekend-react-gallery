import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [galleryList, setGalleryList] = useState('')

  useEffect(() => {
    //Code runs on page load 
    //fetching images from the gallery.data.js
    FetchImages(); 
  }, [])

  const FetchImages = () => {
    console.log('FetchImages');
    axios.get('/gallery').then(response => {
      setGalleryList(response)
    }).catch(error => {
      console.log('/GET Error', error);
    })
  } // end fetchImages

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <GalleryList />
        
        <img src="images/goat_small.jpg"/>
        <img src="images/beach.jpeg" />
        <img src="images/triforce.jpg" />
      </div>
    );
}

export default App;
