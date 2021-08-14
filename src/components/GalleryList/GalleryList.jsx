
function GalleryList({galleryList}) {

    console.log(galleryList);

    return (
        <>
            <h4>Enjoy!</h4>
            {galleryList.map(image => <GalleryItem image={image}/>)}

        </>
    ); // end return
} // end GalleryList

export default GalleryList;


{ shoppingList.map(item => <ShoppingItem item={item} purchaseItem={purchaseItem} />) }