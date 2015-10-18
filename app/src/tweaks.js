"use strict";
$(function() {

    var profileImg = $("#profileImg");
    var download;
    /* jshint ignore:start */
    download = new Image(); //jshint doesn't like Image
    /* jshint ignore:end */
    var swapImages = function() {
        profileImg.get(0).src = "assets/portrait.jpg";
    };

    download.onload = swapImages;
    //Begin loading of the image
    download.src = "assets/portrait.jpg";

    //If the images is already loaded (i.e. it was in the local cache)
    //img.onload will not fire
    if(download.width !== 0) {
        swapImages();
    }

    
});