function getRandomFont() {
  let fonts = ["Arial", "Arial Black", "Comic Sans MS", "Impact", "Lucida Sans Unicode", "Tahoma", "Trebuchet MS", "Verdana", "Georgia"];
    a = fonts[Math.floor(Math.random() * fonts.length)];
    console.log(a);
  return a;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(document).ready(function(){
 
  let magChrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?";
  for(var i = 0; i < magChrs.length; i++){
    $("#letters").append("<div class= 'cont ui-widget-content'>" + magChrs[i] + "</div>");
  }
  
  var newLetters = [];

  $("#letters").children().each(function(){
    $(this).on('mousedown', function(){
      $(this).clone().draggable().css({'background-color' : getRandomColor(), 'color' : getRandomColor(), 'font-family' : getRandomFont()}).appendTo($("#area"));
    });  
  });

    
  $("#clear").on('click', function(){
    $("#area").empty();
  }); 

  let disarmed = [];

  document.body.addEventListener('keydown', function(e){
  	if (disarmed.indexOf(e.keyCode) > -1)
  		return;
  	// key first pressed
  	disarmed.push(e.keyCode);
  });

  document.body.addEventListener('keyup', function(e) {
  	let index = disarmed.indexOf(e.keyCode);
  	if (index > -1) {
      var $newLetter = $("<div class='cont ui-widget-content'>" + String.fromCharCode(disarmed.splice(index, 1)[0]) + "</div>").draggable().css({'background-color' : getRandomColor(), 'color' : getRandomColor(), 'font-family' : getRandomFont()});
      $("#area").append($newLetter);
	  }
  });

});


