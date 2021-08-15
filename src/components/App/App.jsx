import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    //Code runs on page load 
    //fetching images from the gallery.data.js
    fetchImages(); 
  }, [])

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
