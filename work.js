$(document).ready(function() {

var clicks = 0;
var score = 0;
var tryes = 0;


function thimbleMove() {
 
 //========call different functionts(moves) in different clicks===

     if (clicks === 0){

    thimbleMove4(".thimble1");
    thimbleMove3(".thimble4");
    thimbleMove2(".thimble2");
    thimbleMove1(".thimble3");
    clicks++;

    } else if (clicks === 1){
    thimbleMove4(".thimble4");
    thimbleMove3(".thimble1");	
    thimbleMove1(".thimble2");
    thimbleMove2(".thimble3");
    clicks++;

    } else if(clicks === 2){

     thimbleMove2(".thimble1");
     thimbleMove5(".thimble2");  
     thimbleMove2(".thimble3");
     thimbleMove7(".thimble4");
     clicks++;

    }else {

     thimbleMove1(".thimble3");
     thimbleMove6(".thimble2");  
     thimbleMove1(".thimble1");
     thimbleMove8(".thimble4"); 
     clicks -= 3;
    }



function thimbleMove1(a) {
	var thi = $(a);
	thi.animate({top: "+=40px"}, 800).delay(500)
     .animate({left: "-=100px"}, 800).delay(500)
     .animate({top: "-=40px" }, 800).delay(500);

     }
 function thimbleMove2(a) {
 	var thi = $(a);
 	thi.animate({top: "-=40px"}, 800).delay(1200)
 	   .animate({left: "+=100px"}, 800) 
 	   .animate({top: "+=40px" }, 800);
   
    } 
 function thimbleMove3(a) {
 	var thi = $(a);
 	thi.animate({top: "-=40px"}, 800)
 	   .animate({left: "-=300px"}, 800)
 	   .animate({top: "+=40px" }, 800);
    } 
 function thimbleMove4(a) {
	 	var thi = $(a);
	 	thi.delay(1500).animate({top: "+=40px"}, 800)
	 	   .animate({left: "+=300px"}, 800)
	 	   .animate({top: "-=40px" }, 800);	   
    } 
 function thimbleMove5(a) {
  var thi = $(a);
  thi.animate({top: "+=40px"}, 800)
     .animate({left: "+=100px"}, 800) 
     .animate({top: "-=40px" }, 800);
    } 
 function thimbleMove6(a) {
  var thi = $(a);
  thi.animate({top: "-=40px"}, 800)
     .animate({left: "-=100px"}, 800) 
     .animate({top: "+=40px" }, 800);
    }  
 function thimbleMove7(a) {
  var thi = $(a);
  thi.animate({top: "+=40px"}, 800)
     .animate({left: "-=300px"}, 800)
     .animate({top: "-=40px" }, 800);  
    }   
 function thimbleMove8(a) {
  var thi = $(a);
  thi.animate({top: "-=40px"}, 800)
     .animate({left: "+=300px"}, 800)
     .animate({top: "+=40px" }, 800);    
    }                 
}

//On click on the thimble 
 $(".thimble_img img").click(function() {

 var alt = $(this).attr('alt');
 
   var randNumber = Math.floor(Math.random()*4)+1;//random number

//check if rendom number match with the thumbling number
     if(randNumber == alt){
        score++;
        tryes++;

    //if it match show the boll under thimble and trigger next move
      
      $(this).attr('src', 'images/ball.png').show().delay(500).fadeOut(500, function(){//show the ball under thimble
      	$(this).attr('src', 'images/thimble.png').fadeIn("slow", function(){//return the thimble back on plece
      		//call next move
          thimbleMove();
      	});
      });
     
     } else{
      tryes++;

      //if it not match show that there is nothing under thimble and show wher is the ball
      
      $(this).fadeOut(200, function(){
      	$(this).fadeIn(200);
      	$('img[alt="'+randNumber+'"]').attr('src', 'images/ball.png').show().delay(500).fadeOut(500, function(){//show where was ball
      	$(this).attr('src', 'images/thimble.png').fadeIn('slow', function(){//return thimble imege back
      	
        	//call the next move
          thimbleMove();
      	});
        
        });
       
      });

     }	
     //show hove many times you make a right guess
    $('.scores').html("Scores: "+score);
    //show how many tryes you make
    $('.tryes').html("Attempts: "+tryes);
   });


 });

















