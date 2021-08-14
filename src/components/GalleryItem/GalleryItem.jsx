function GalleryItem({image}) {
    console.log(image);
    return (
        <>
            <div className="imgParentElement">
                <img className="img" src={image.path} />
                <br></br>
                <button>Sweet</button>
                <br></br>
                <p>{image.likes} Sweets</p>
            </div>
        </>
    )
} // end ShowImages

export default GalleryItem;