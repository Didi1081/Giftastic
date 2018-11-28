

var music = document.getElementById("myAudio");
var rating;

var arrayOfBrands = [];

$(document).ready(function () {
    buildButtons();
});

function buildButtons() {
    $('#buttonContainer').empty();

    for (var i = 0; i < arrayOfBrands.length; i++) {
        var button = $('<button>');
        button.text(arrayOfBrands[i]);
        button.attr('data-animal', arrayOfBrands[i]);
        button.addClass('btn btn-outline-dark btn btn-primary btn-lg brand');
        $('#buttonContainer').append(button);
    }

    buttonApiListner();
}

//Music buttons

function playAudio() {
    music.play();
}

function pauseAudio() {
    music.pause();
}
//Music buttons


$('#submit').on('click', function () {
    var clothingBrand = $('#clothingBrand').val();
    rating = $('#rating').val();
    console.log(rating);
    arrayOfBrands.push(clothingBrand);
    buildButtons();
    clothingBrand.val('');
    rating.val('');
});

//6.1 - Always read documentation for that API

function buttonApiListner() {

    $('.brand').on('click', function () {
        console.log("button clicked");
        var x = $(this).data("animal");
        console.log(x);
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=T3bTJBKugMxVT3yX9ddzafzVAJTHEZtk&limit=1&rating=" + rating;

        $.ajax({ url: queryURL, method: "GET" })
            .done(function (response) {
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    var animalDiv = $('<div>');
                    var animalImage = $('<img>');
                    animalImage.attr('src', response.data[i].images.fixed_height.url);
                    animalDiv.prepend(animalImage);
                    $('#gifsGoHere').prepend(animalDiv);
                }
            })

    })

}


//Hard code for example brand buttons
$('.hard').on('click', function () {
    var x = $(this).data("animal");
    console.log(x);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=T3bTJBKugMxVT3yX9ddzafzVAJTHEZtk&limit=1";

    $.ajax({ url: queryURL, method: "GET" })
        .done(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var animalDiv = $('<div>');
                var animalImage = $('<img>');
                animalImage.attr('src', response.data[i].images.fixed_height.url);
                animalDiv.prepend(animalImage);
                $('#gifsGoHere').prepend(animalDiv);

            }
        })

})




// Make the Gifs toggle from animated to non-animated
// $(".gifsGoHere").on("click", function() {
  
//     var state = $(this).attr("data-state");

   
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }

//   });





