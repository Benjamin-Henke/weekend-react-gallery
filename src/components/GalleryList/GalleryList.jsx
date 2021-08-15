import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, likeImage}) {
    console.log(galleryList);

    return (
        <>
            {galleryList.map(image=> <GalleryItem image={image} likeImage={likeImage}/>)}
        </>
    ); // end return
} // end GalleryList

export default GalleryList;
