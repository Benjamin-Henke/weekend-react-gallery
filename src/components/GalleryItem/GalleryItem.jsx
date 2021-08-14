function GalleryItem({image, likeImage}) {

    // Handle click event and send id to update number of likes
    function SweetBtn() {
        likeImage(image.id)
    } // end SweetButton

    return (
        <>
            <div className="imgParentElement">
                <img className="img" src={image.path} />
                <br></br>
                <button onClick={SweetBtn}>Sweet</button>
                <br></br>
                <p>{image.likes} Sweets</p>
            </div>
        </>
    )
} // end ShowImages

export default GalleryItem;