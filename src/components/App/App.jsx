import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  
  const [galleryList, setGalleryList] = useState([])

  useEffect(() => {
    //Code runs on page load 
    //fetching images from the gallery.data.js
    FetchImages(); 
  }, [])

  const FetchImages = () => {
    console.log('FetchImages');
    axios.get('/gallery').then(response => {
      setGalleryList(response.data)
    }).catch(error => {
      console.log('/GET Error', error);
    })
  } // end fetchImages

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList}/>
        <GalleryItem />
        
        
      </div>
    );
}

export default App;
