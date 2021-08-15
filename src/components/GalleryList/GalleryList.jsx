import GalleryItem from '../GalleryItem/GalleryItem';

// Allows galleryList and likeImage to be passed through GalleryList
function GalleryList({galleryList, likeImage}) {
    console.log(galleryList);

    return (
        <>
            {galleryList.map(image=> <GalleryItem image={image} likeImage={likeImage}/>)}
        </>
    ); // end return
} // end GalleryList

export default GalleryList;
