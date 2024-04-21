$(document).ready(function(){
    // Načítanie obrázkov z JSON súboru
    $.getJSON("gallery.json", function(data){
        $.each(data.images, function(index, image){
            $("#gallery").append("<div class='image'><img src='" + image.url + "' alt='" + image.alt + "'></div>");
        });
    });
});
