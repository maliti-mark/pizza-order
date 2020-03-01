$('document').ready(function(){
    $('#images').hover(function() {
        var image = $(this); 
        image.attr('/images/small.jpg', image.attr('/images/small.jpg').replace('p', 'p'));
     }, function () {
        var image = $(this); 
        image.attr('/images/small.jpg', image.attr('/images/small.jpg').replace('p', 'p'));
     });
})
