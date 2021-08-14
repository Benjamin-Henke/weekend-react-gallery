import GalleryItems from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {

    console.log(galleryList);

    return (
        <>
            <h4>Enjoy!</h4>
            {galleryList.map(image => <GalleryItems image={image} />)}

        </>
    ); // end return
} // end GalleryList

export default GalleryList;
