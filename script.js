$(document).ready(function() {
    // AJAX volanie pre načítanie obrázkov do galérie
    $.ajax({
        url: 'gallery_images.json', // JSON súbor s obrázkami
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            $.each(data.images, function(index, image) {
                $('.gallery-images').append('<a href="' + image.url + '" data-lightbox="gallery" data-title="' + image.title + '"><img src="' + image.thumbnail + '" alt="' + image.title + '"></a>');
            });
        },
        error: function() {
            console.log('Failed to load images');
        }
    });

    // AJAX volanie pre odoslanie rezervácie na server
    $('#reservation-form').submit(function(event) {
        event.preventDefault(); // Zastavenie predvoleného odosielania formulára

        var formData = $(this).serialize(); // Získanie dát z formulára

        $.ajax({
            url: 'submit_reservation.php', // URL adresá, na ktorú sa odosielajú dáta
            type: 'POST',
            data: formData,
            success: function(response) {
                alert(response); // Zobrazenie odpovede z servera
            },
            error: function() {
                alert('Error submitting reservation');
            }
        });
    });
});
