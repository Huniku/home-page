$(function() {

    var profileImg = $("#profileImg");
    var download = new Image();
    var swapImages = function() {
        console.log("swap");
        profileImg.get(0).src = "assets/portrait.jpg";
    }

    download.onload = swapImages;
    //Begin loading of the image
    console.log("start dld");
    download.src = "assets/portrait.jpg";

    //If the images is already loaded (i.e. it was in the local cache)
    //img.onload will not fire
    if(download.width != 0) {
        console.log("cached")
        swapImages();
    }

    
});