import {useState} from 'react';

function GalleryItem({image, likeImage}) {

    // Used to change the state of imgInfo in order to change the DOM
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

    // Handle click even when description is clicked
    function DescriptionClick() {
        console.log('Description', image.id);
        setImageInfo(false)
    } // end DescriptionClick

    // What will be rendered on the DOM
    return (
        <>
            <div className="imgParentElement">
                {imgInfo === true || false ? 
                    <div className="descriptionParent" onClick={DescriptionClick}><h2 className="imgDescription" >{image.description}</h2></div>
                    : 
                    <img className="img" onClick={ImgClick}src={image.path} />}
                <br></br>
                <button onClick={SweetBtn}>Sweet Pic</button>
                <br></br>
                <p>{image.likes} Sweet Pics</p>
            </div>
        </>
    )
} // end ShowImages
export default GalleryItem;

