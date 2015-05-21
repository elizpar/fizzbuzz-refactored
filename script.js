$(document).ready(function(){
//asks user for a number, Fizz Buzzes it :-)

  $('.add').on('click', function(event) {
    
    event.preventDefault();
    var number = $('#num').val();
  	console.log(number);
  
    for (var count = 1; count <= number; count++) {
    //console.log(count);
    
      if (count % 3 == 0 && count % 5 == 0) {
        console.log("FizzBuzz");
        $('.answer').append('<li><span>FizzBuzz</span></li>');
        }
       else if (count % 3 == 0){
        console.log("Fizz");
        $('.answer').append('<li><span>Fizz</span></li>');
        }
       else if (count % 5 == 0) {
        console.log("Buzz");
        $('.answer').append('<li><span>Buzz</span></li>');
        }
       else {
        console.log(count);
        $('.answer').append('<li><span>'+count+'</span></li>');
        }  
    }

  });
});

//set up html, hide it, then flip it on and append.to  or add html