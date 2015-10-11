$(function() {

    var ref = $('.avatar:first');
    ref.bind("reposition", reposition);

    function reposition() {
        $('.line').each(function(index, value) {
            console.log(value);
            console.log(ref.position()['left'], ref.css('width')/2);
            $(value).css({left: ref.position()['left']});
        }); 
    }
    //reposition();
});