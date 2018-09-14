//Declare variables for the Movie section questions
var movieQuestion1 = "'It does not do to dwell on dreams and forget to live.'"
var movieQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
var movieQuestion3 =  "'According to the map, we've only gone 4 inches!'";
var movieQuestion4 =  "'We're not so different, you and I.'";

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
  var incorrectAnswers = 0;
  
  //If uses guesses a correct answer, correctAnswers ++
  $(document).ready(function() {
    $(".correctAnswer").on("click", function() {
    correctAnswers++;
  });
  });

  //If user guesses an incorrect answer, incorrectAnswers ++
  $(document).ready(function() {
    $(".incorrectAnswer").on("click", function() {
    incorrectAnswers++;
  });
  });
  
//If the 'Submit' button is pressed, do the following
$(document).ready(function() {
  $("#correctAnswers").hide();
  $("#incorrectAnswers").hide();
  $("#reload").hide();
  $("#submit").on("click", function(){
  $(".inline").hide();
  $("#p1").html("Correct Answers:" + " " + correctAnswers + " " + "Incorrect Answers:" + " " + incorrectAnswers);
  $("#reload").show();
  });
});

//If the 'Play Again!' button is pressed, reload the page
$(document).ready(function() {
$("#reload").on("click", function(){
  location.reload();
});
});
