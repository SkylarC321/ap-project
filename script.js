
items = [ {name: "Tank Top", price: 17.99} ,{name: "T Shirt", price: 9.99} ,{name: "Blouse", price: 20} ,{name: "Button-Downs", price: 25} ,{name: "Jeans", price: 30.82} ,{name: "Shorts", price: 20.46} ,{name: "Pajamas", price: 18.48} ,{name: "Dresses", price: 27.37} ,{name: "Skirts", price: 20.47}]
cart = []
function addItem(index){
    cart.push(items[index]);
    console.log(cart);

}


function openGallery () {
    let Gallery = document.getElementById("Gallery");
    Gallery.classList.remove("hideGallery");

    

    let Gallery_div = document.getElementById(Gallery);
    Gallery_div.classList.remove("hideGallery");
}

function closeGallery () {
    let Gallery = document.getElementById("Gallery");
    Gallery.classList.add("hideGallery");
}
