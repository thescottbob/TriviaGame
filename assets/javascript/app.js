//Declaring a function to remove the buttons from the page
function removeButtons() {
  $(".inline").remove();
};

//What happens if user clicks the 'Books' button
//Remove buttons from the page
$("#books").on("click", function() {
  removeButtons();
});
//Populate the 'Books' trivia questions

//What happens if user clicks the 'Movies' button
//Remove buttons from the page
$("#movies").click(removeButtons());
//Populate the 'Movies' trivia questions
// "It does not do to dwell on dreams and forget to live" - Harry Potter and the Sorceror's Stone
//"As long as you can still grab a breath, you fight. You breathe...keep breathing" - The Revenant
//"According to the map, we've only gone 4 inches." - Dumb & Dumber


//What happens if user clicks the 'People' button
//Remove buttons from the page
$("#people").click(removeButtons());
//Populate the 'People' trivia questions

//What happens if user clicks the 'Songs' button
//Remove buttons from the page
$("#songs").click(removeButtons());
//Populate the 'Songs' trivia questions

//.show
//.hide