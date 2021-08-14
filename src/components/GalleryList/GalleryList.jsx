import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {
    console.log(galleryList);

    return (
        <>
            {galleryList.map(image=> <GalleryItem image={image} />)}
        </>
    ); // end return
} // end GalleryList

export default GalleryList;
