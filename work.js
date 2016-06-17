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

} else{
thimbleMove4(".thimble4");
thimbleMove3(".thimble1");	
thimbleMove1(".thimble2");
thimbleMove2(".thimble3");
clicks--;

}

 function thimbleMove1(a) {
 	var thi = $(a);
 	thi.animate({top: "+=40px"}, 800)
 	   .animate({left: "-=100px"}, 800)
 	   .animate({top: "-=40px" }, 800);

 }
 function thimbleMove2(a) {
 	var thi = $(a);
 	thi.animate({top: "-=40px"}, 800)
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
	 	thi.animate({top: "+=40px"}, 800)
	 	   .animate({left: "+=300px"}, 800)
	 	   .animate({top: "-=40px" }, 800);
	   } 


}                    


 $(".thimble_img img").click(function() {

 var alt = $(this).attr('alt');
 
 

   var randNumber = Math.floor(Math.random()*4)+1;

     if(randNumber == alt){
        score++;
        tryes++;

      $(this).attr('src', 'images/ball.png').show().delay(500).fadeOut(500, function(){
      	$(this).attr('src', 'images/thimble.png').fadeIn("slow", function(){
      		thimbleMove();
      	});
      });
     
     } else{
      tryes++;

      $(this).fadeOut(200, function(){
      	$(this).fadeIn(200);
      	$('img[alt="'+randNumber+'"]').attr('src', 'images/ball.png').show().delay(500).fadeOut(500, function(){
      	$(this).attr('src', 'images/thimble.png').fadeIn('slow', function(){
      		thimbleMove();
      	});
        
        });
       
      });

     }	
    $('.scores').html("Score: "+score);
    $('.tryes').html("Tryes: "+tryes);
  });


 });

















