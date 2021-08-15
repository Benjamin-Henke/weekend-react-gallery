import {useState} from 'react';

function GalleryItem({image, likeImage}) {

    const [imgInfo, setImageInfo] = useState('');


    // Handle click event and send id to update number of likes
    function SweetBtn() {
        likeImage(image.id)
    } // end SweetButton

    // Handle click event when image is clicked
    function ImgClick() {
        console.log('Img', image.id);
        setImageInfo(true)
    } // end ImgClick

    function DescriptionClick() {

    } // end DescriptionClick

    return (
        <>
            <div className="imgParentElement">
                {imgInfo === true ? <h3 className="imgDescription" onClick={DescriptionClick}>{image.description}</h3> : <img className="img" onClick={ImgClick}src={image.path} />}
                <br></br>
                <button onClick={SweetBtn}>Sweet Pic</button>
                <br></br>
                <p>{image.likes} Sweet Pics</p>
            </div>
        </>
    )
} // end ShowImages
export default GalleryItem;

