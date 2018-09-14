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

var triviaQuestions = [
  {
    question: "In what year was Pixar founded?",
    answerList: [
      "Harry Potter and the Sorceror's Stone",
      "The Revenant",
      "Dumb & Dumber",
      "Spider Man"
    ],
    answer: 1
  },
  {
    question:
      "Which tech mogul provided funding and became a co-founder of Pixar?",
    answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
    answer: 0
  },
  {
    question:
      "What was Pixar's first feature-length film that was released in 1995?",
    answerList: ["Toy Story", "A Bug's Life", "Monster's Inc", "Finding Nemo"],
    answer: 0
  },
  {
    question:
      "Who was the first Pixar character added to the Disney Princess line-up?",
    answerList: ["Jessie", "Repunzel", "Merida", "Elsa"],
    answer: 2
  },
  {
    question:
      "What's the name of Pixar's first short film, also known as their mascot?",
    answerList: ["Lampo", "Junior", "Pixie", "Luxo Jr."],
    answer: 3
  },
  {
    question:
      "How many sequels does Pixar currently have released? (as of August 2016)",
    answerList: ["5", "3", "6", "7"],
    answer: 0
  },
  {
    question:
      "Which film won Pixar's first Academy Award for Best Animated Feature?",
    answerList: ["Toy Story", "Finding Nemo", "Up", "Wall-E"],
    answer: 1
  },
  {
    question: "Who directed Pixar's first three feature films?",
    answerList: ["Peter Docter", "Brad Bird", "John Lasseter", "Peter Sohn"],
    answer: 2
  },
  {
    question: "Who voiced Sadness in 'Inside Out'?",
    answerList: [
      "Amy Poehler",
      "Phyllis Smith",
      "Mindy Kaling",
      "Phyllis Vance"
    ],
    answer: 1
  },
  {
    question:
      "Billy Crystal voices Mike Wazowski in 'Monster, Inc.' but what role did he originally turn down from Pixar?",
    answerList: ["Hopper", "Woody", "Marlin", "Buzz Lightyear"],
    answer: 3
  },
  {
    question:
      "The voice of WALL-E, Ben Burtt, also voiced what other famous robot?",
    answerList: ["R2-D2", "Alpha 5", "C-3PO", "Astro Boy"],
    answer: 0
  },
  {
    question:
      "Brad Bird directed which animated film prior to taking on 'The Incredibles'?",
    answerList: [
      "The Brave Little Toaster",
      "The Iron Giant",
      "Tarzan",
      "The Prince of Egypt"
    ],
    answer: 1
  },
  {
    question: "Pixar was originally a division of which studio?",
    answerList: [
      "Dreamworks",
      "Industrial Light & Magic",
      "Disney",
      "Lucasfilm"
    ],
    answer: 3
  },
  {
    question:
      "What is the name of the famour explorer from 'Up' that Carl looked up to as a boy?",
    answerList: [
      "Charles F. Muntz",
      "Chuck M. James",
      "Charlie Rose",
      "Carl Carlton"
    ],
    answer: 0
  },
  {
    question: "'A Bug's Life' was loosely based on what other film?",
    answerList: [
      "I Live in Fear",
      "Rashomon",
      "Seven Samurai",
      "Magneficent Seven"
    ],
    answer: 2
  }
];

//Append the question onto whatever div that is
