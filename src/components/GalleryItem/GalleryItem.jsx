function GalleryItem({image}) {
    console.log(image);
    return (
        <>
            <div className="image">
                <img src={image.path} />
            </div>
        </>
    )
} // end ShowImages

export default GalleryItem;