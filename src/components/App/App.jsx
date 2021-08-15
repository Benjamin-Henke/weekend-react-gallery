import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  
  // Setting galleryList's value to data from database to be able to pass through components
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    //Code runs on page load 
    //fetching images from the gallery.data.js
    fetchImages(); 
  }, [])

  // GET req to gallery data to display
  const fetchImages = () => {
    console.log('FetchImages');
    axios.get('/gallery').then(response => {
      console.log('GET Successful');
      setGalleryList(response.data)
    }).catch(error => {
      console.log('/GET Error', error);
      alert('GET Error. See console for detail.')
    })
  } // end fetchImages

  // PUT req tp update number of likes on a photo
  const likeImage = (id) => {
    console.log(id);
    axios.put(`/gallery/like/${id}`).then(response => {
      console.log('PUT Successful');
      fetchImages();
    }).catch(error => {
      console.log('PUT Error', error);
      alert('PUT Error. See console for details.')
    })
  } // end likeImage

  // What will be display on the DOM
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} likeImage={likeImage}/>
        
        
      </div>
    );
}

export default App;
