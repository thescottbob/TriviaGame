//Declare variables for the four 'Books' section questions
var booksQuestion1 =
  "'There is nothing like looking, if you want to find something.'";
var booksQuestion2 = "'Destroying things is much easier than making them.'";
var booksQuestion3 =
  "'Don't waste your love on somebody, who doesn't value it.";
var booksQuestion4 =
  "'I think it's impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves..'";

//Declare variables for the four 'Movies' section questions
var moviesQuestion1 = "'It does not do to dwell on dreams and forget to live.'";
var moviesQuestion2 =
  "'As long as you can still grab a breath, you fight. You breathe...keep breathing.'";
var moviesQuestion3 = "'According to the map, we've only gone 4 inches!'";
var moviesQuestion4 = "'We're not so different, you and I.'";

//Declare variables for the four 'People' section questions
var peopleQuestion1 = "'.'";
var peopleQuestion2 = "'.'";
var peopleQuestion3 = "'.'";
var peopleQuestion4 = "'.'";

//Declare variables for the four 'Songs' section questions
var songsQuestion1 = "'.'";
var songsQuestion2 = "'.'";
var songsQuestion3 = "'.'";
var songsQuestion4 = "'.'";

//Hide the questions and the submit button until one of the four buttons on the home screen is pressed
$(document).ready(function() {
  $("ul").hide();
  $("#submit").hide();
});

//If the 'Books' button is pressed, do the following
$(document).ready(function() {
  $("#books").click(function() {
    $("ul").show();
    $(".moviesQuestion").hide();
    $(".peopleQuestion").hide();
    $(".songsQuestion").hide();
    $("#books").html(booksQuestion1);
    $("#movies").html(booksQuestion2);
    $("#people").html(booksQuestion3);
    $("#songs").html(booksQuestion4);
    $("#submit").show();
  });
});

//If the 'Movies' button is pressed, do the following
$(document).ready(function() {
  $("#movies").click(function() {
    $("ul").show();
    $(".booksQuestion").hide();
    $(".peopleQuestion").hide();
    $(".songsQuestion").hide();
    $("#books").html(moviesQuestion1);
    $("#movies").html(moviesQuestion2);
    $("#people").html(moviesQuestion3);
    $("#songs").html(moviesQuestion4);
    $("#submit").show();
  });
});

//If the 'People' button is pressed, do the following
$(document).ready(function() {
  $("#people").click(function() {
    $("ul").show();
    $(".booksQuestion").hide();
    $(".moviesQuestion").hide();
    $(".songsQuestion").hide();
    $("#books").html(peopleQuestion1);
    $("#movies").html(peopleQuestion2);
    $("#people").html(peopleQuestion3);
    $("#songs").html(peopleQuestion4);
    $("#submit").show();
  });
});

//If the 'Songs' button is pressed, do the following
$(document).ready(function() {
  $("#songs").click(function() {
    $("ul").show();
    $(".booksQuestion").hide();
    $(".moviesQuestion").hide();
    $(".peopleQuestion").hide();
    $("#books").html(songsQuestion1);
    $("#movies").html(songsQuestion2);
    $("#people").html(songsQuestion3);
    $("#songs").html(songsQuestion4);
    $("#submit").show();
  });
});

var numQuestions = 4;
var correctAnswers = 0;
var incorrectAnswers = numQuestions - correctAnswers;

//If uses clicks a correct answer, correctAnswers ++
$(document).ready(function() {
  $(".correctAnswer").on("click", function() {
    correctAnswers++;
  });
});

var timeRemaining = 29;

//Create a countdown from 30 seconds to 0 seconds and render it to the page
function countdown() {
  $("#p1").html(timeRemaining + " " + "seconds remaining");
  timeRemaining += -1;
  if (timeRemaining === 0) {
    $("#reload").show();
    $("#p1").hide();
    $(".inline").html(
      "Correct Answers:" +
        " " +
        correctAnswers +
        " " +
        "Incorrect Answers:" +
        " " +
        incorrectAnswers
    );
    clearTimeout();
  }
}

//Create the time interval for the countdown function (executed every 1000 milliseconds)
$(document).ready(function() {
  $("button").on("click", function() {
    $("#p2").hide();
    $("#p1").html(" 30 seconds remaining");
    setInterval(countdown, 1000);
  });
});

// $("#submit").on("click", function() {
//   //Tally the number of correct answers and display to the page
//   //If user pressed submit
//   // Tally the number of incorrect answers and display to the page
// });

// if(//submit button is pressed && )

//If the 'Submit' button is pressed, do the following
$(document).ready(function() {
  $("#correctAnswers").hide();
  $("#incorrectAnswers").hide();
  $("#reload").hide();
  $("#submit").on("click", function() {
    clearTimeout(countdown);
    $(".inline").hide();
    $("#p1").html(
      "Correct Answers:" +
        " " +
        correctAnswers +
        " " +
        "Incorrect Answers:" +
        " " +
        incorrectAnswers
    );
    $("#reload").show();
  });
});

//If the 'Play Again!' button is pressed, reload the page
$(document).ready(function() {
  $("#reload").on("click", function() {
    location.reload();
  });
});
