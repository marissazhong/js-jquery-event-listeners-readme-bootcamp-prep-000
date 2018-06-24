//define functions here
function getIt() {
  $('p').on("click", function() {alert("Hey!")});
}

function frameIt() {
  $('img').on('load', function(){return img.tasty});
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 7){
      alert('G was pressed');
    }
  });
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});
