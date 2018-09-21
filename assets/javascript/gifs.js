
//Music buttons
var music = document.getElementById("myAudio"); 

function playAudio() { 
    music.play(); 
} 

function pauseAudio() { 
    music.pause(); 
}


//6.1 - Always read documentation for that API

$('button').on('click',function(){
var x = $(this).data("animal");
console.log(x);
var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=T3bTJBKugMxVT3yX9ddzafzVAJTHEZtk&limit=1";

$.ajax({url:queryURL,method:"GET"})
       .done(function(response){
           console.log(response);
           for(var i=0;i<response.data.length;i++){
               var animalDiv = $('<div>');
               var animalImage = $('<img>');
               animalImage.attr('src',response.data[i].images.fixed_height.url);
               animalDiv.prepend(animalImage);
               $('#gifsGoHere').prepend(animalDiv);

               $('.border').gifplayer();





           }
       })

})



