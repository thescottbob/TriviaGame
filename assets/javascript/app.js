//Declare variables for the Movie section questions, options, and answers
var movieQuestion1 = "'It does not do to dwell on dreams and forget to live.'"
// var movieQuestion1options = ["The Lord of The Rings: The Fellowship of The Ring", "Harry Potter and the Sorceror's Stone", "Moana", "Aladdin"];
var movieQuestion1correctAnswer = "Harry Potter and the Sorceror's Stone"

var movieQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
// var movieQuestion2options = ["The Matrix", "Gladiator", "The Revenant", "Batman Begins"];
var movieQuestion2correctAnswer = "The Revenant"

var movieQuestion3 =  "'According to the map, we've only gone 4 inches!'";
var movieQuestion3correctAnswer = "Dumb and Dumber"

var movieQuestion4 =  "'We're not so different, you and I.'";
var movieQuestion4correctAnswer = "Austin Powers: Goldmember"

//If the 'Books' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
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
  $("ul").hide();
  $("#submit").hide();
  $("#movies").click(function(){
    $("#p2").hide();
    $("ul").show();
    $("#books").html(movieQuestion1);
    $("#movies").html(movieQuestion2);
    $("#people").html(movieQuestion3);
    $("#songs").html(movieQuestion4);
    $("#submit").show();
  });
});

//If the 'People' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
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
  $("ul").hide();
  $("#songs").click(function(){
    $("#p2").hide();
    $("#books").hide();
    $("#movies").hide();
    $("#people").hide();
    $("#songs").hide();
  });
  });

//If any of the miniButtons are clicked on, then place a check mark within that miniButton
$(document).ready(function() {
  $(".miniButtons").on("click", function(){
  $(this).html("&#10003;");
  });
});