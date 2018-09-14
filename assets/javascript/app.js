//All buttons will be hidden when any of the buttons is pressed
//$(document).ready(function() {
  //$(".inline").on("click", function() {
   // $(this).hide();
    //console.log(this);
 // });
//});

var movieQuestion1 = "'It does not do to dwell on dreams and forget to live'"
var movieQuestion1options = ["The Lord of The Rings: The Fellowship of The Ring", "Harry Potter and the Sorceror's Stone", 
"Moana", "Aladdin"];
var movieQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing'";
var movieQuestion3 =  "'According to the map, we've only gone 4 inches'";
var movieQuestion4 =  "'We're not so different, you and I'";

//If the 'Books' button is pressed, do the following 
$(document).ready(function() {
  $("#books").click(function(){
    $("#p2").hide();
    $("#books").hide();
    $("#movies").hide();
    $("#people").hide();
    $("#songs").hide();
  });
  });

//If the 'Movies' button is pressed, do the following 
$(document).ready(function() {
  $("#movies").click(function(){
    $("#p2").hide();
    $("#books").html(movieQuestion1);
    $("#books").after(movieQuestion1options);
    $("#movies").html(movieQuestion2);
    $("#people").html(movieQuestion3);
    $("#songs").html(movieQuestion4);
  });
  });

  //Answers to the above are Harry Potter and the Sorceror's Stone, The Revenant, Dumb and Dumber, Spider Man, and The Lion King, respectively.
  //Append the quote onto the relevant div
  

//If the 'People' button is pressed, do the following 
$(document).ready(function() {
  $("#people").click(function(){
    $("#p2").hide();
    $("#books").hide();
    $("#movies").hide();
    $("#people").hide();
    $("#songs").hide();
  });
  });

//If the 'Songs' button is pressed, do the following 
$(document).ready(function() {
  $("#songs").click(function(){
    $("#p2").hide();
    $("#books").hide();
    $("#movies").hide();
    $("#people").hide();
    $("#songs").hide();
  });
  });

