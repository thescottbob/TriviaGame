//All buttons in the inline class will be hidden when any of the buttons is pressed
$(document).ready(function() {
  $(".inline").on("click", function() {
    $(this).hide();
    console.log(this);
  });
});

var movieQuotes = [
  "It does not do to dwell on dreams and forget to live",
  "As long as you can still grab a breath, you fight. You breathe...keep breathing",
  "According to the map, we've only gone 4 inches",
  "We're not so different, you and I"
];

//Append the quote onto the relevant div
