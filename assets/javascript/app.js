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


  var correctAnswers = 0;
  var incorrectAnswers = 4 - correctAnswers;
  
  //If uses guesses a correct answer, correctAnswers += 1; else, incorrectAnswers += 1
  
  
  //If uses guesses a incorrect answer, 

//If the 'Submit' button is pressed, do the following
$(document).ready(function() {
  $("#correctAnswers").hide();
  $("#incorrectAnswers").hide();
  $("#submit").on("click", function(){
  $(".inline").hide();
  $("#p1").html("Correct Answers:" + correctAnswers + "Incorrect Answers:" + incorrectAnswers);
  // $("#correctAnswers").show();
  // $("#incorrectAnswers").show();
  // $("#correctAnswers").append("0");
  // $("#incorrectAnswers").append("0");
  });
});
