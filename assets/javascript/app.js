//Declare variables for the four 'Books' section questions
var booksQuestion1 = "'There is nothing like looking, if you want to find something.'";
var booksQuestion2 =  "'Destroying things is much easier than making them.'";
var booksQuestion3 =  "'Don't waste your love on somebody, who doesn't value it.";
var booksQuestion4 =  "'I think it's impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves..'";

//Declare variables for the four 'Movies' section questions
var moviesQuestion1 = "'It does not do to dwell on dreams and forget to live.'"
var moviesQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
var moviesQuestion3 =  "'According to the map, we've only gone 4 inches!'";
var moviesQuestion4 =  "'We're not so different, you and I.'";

//Declare variables for the four 'People' section questions
var peopleQuestion1 = "'It does not do to dwell on dreams and forget to live.'"
var peopleQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
var peopleQuestion3 =  "'According to the map, we've only gone 4 inches!'";
var peopleQuestion4 =  "'We're not so different, you and I.'";

//Declare variables for the four 'Songs' section questions
var songsQuestion1 = "'It does not do to dwell on dreams and forget to live.'"
var songsQuestion2 =  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
var songsQuestion3 =  "'According to the map, we've only gone 4 inches!'";
var songsQuestion4 =  "'We're not so different, you and I.'";

//If the 'Books' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
  $("#submit").hide();
  $("#books").click(function(){
    $("ul").show();
    $(".moviesQuestion").hide();
    $(".peopleQuestion").hide();
    $(".songsQuestion").hide();
    $("#p2").hide();
    $("#books").html(booksQuestion1);
    $("#movies").html(booksQuestion2);
    $("#people").html(booksQuestion3);
    $("#songs").html(booksQuestion4);
    $("#submit").show();
  });
});

//If the 'Movies' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
  $("#submit").hide();
  $("#movies").click(function(){
    $("ul").show();
    $(".booksQuestion").hide();
    $(".peopleQuestion").hide();
    $(".songsQuestion").hide();
    $("#p2").hide();
    $("#books").html(moviesQuestion1);
    $("#movies").html(moviesQuestion2);
    $("#people").html(moviesQuestion3);
    $("#songs").html(moviesQuestion4);
    $("#submit").show();
  });
});

//If the 'People' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
  $("#submit").hide();
  $("#people").click(function(){
    $("ul").show();
    $(".booksQuestion").hide();
    $(".moviesQuestion").hide();
    $(".songsQuestion").hide();
    $("#p2").hide();
    $("#books").html(peopleQuestion1);
    $("#movies").html(peopleQuestion2);
    $("#people").html(peopleQuestion3);
    $("#songs").html(peopleQuestion4);
    $("#submit").show();
  });
});

//If the 'Songs' button is pressed, do the following 
$(document).ready(function() {
  $("ul").hide();
  $("#submit").hide();
  $("#songs").click(function(){
    $("ul").show();
    $(".booksQuestion").hide();
    $(".moviesQuestion").hide();
    $(".peopleQuestion").hide();
    $("#p2").hide();
    $("#books").html(songsQuestion1);
    $("#movies").html(songsQuestion2);
    $("#people").html(songsQuestion3);
    $("#songs").html(songsQuestion4);
    $("#submit").show();
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
