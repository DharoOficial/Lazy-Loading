$(document).ready(function(){
    $(document).on("scroll", function(){
        var image = $(".lazy-img img");
        var url = image.data("url");
        image.attr("src", url);

        if(isOnScreen($(".lazy-img"))){
            $("article").css("background-color", "red") ;
        }else{
            $("article").css("background-color", "");
        }
    });
});

function isOnScreen(element){
    var win = $(window);
    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}