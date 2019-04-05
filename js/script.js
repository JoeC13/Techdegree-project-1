/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/***
The following code is the final product for unit-1, Random Quote Generator created by the treehouse student, Joseph Cortez
and submitted for grading.  This code also includes an attempt at the 'Exceeds Expectations' portion. Thank You!
***/

let quotes = [
  {
    quote: 'There may be people that have more talent than you, but theres no excuse for anyone to work harder than you do.',
    source: 'Derek Jeter',
    tag: 'Sports'
  },
  {
    quote: 'Accept the challenges so that you can feel the exhilaration of victory.',
    source: 'George S. Patton',
    tag: 'Military'
  },
  {
    quote: 'Rice is great when you\'re hungry and you want 2000 of something',
    source: 'Mitch Hedberg',
    tag: 'Humor'
  },
  {
    quote: 'You almost had me? You never had me. You never had your car',
    source: 'Vin Diesel',
    citation: 'The Fast and the Furious',
    year: '2001',
    tag: 'Movies'
  },
  {
    quote: 'Yesterday\'s homeruns don\'t win today\'s games',
    source: 'Babe Ruth',
    tag: 'Sports'
  }
];

//An array of colors for random color function.
var bgColor = ['#000066', '#99ffcc', '#cbbeb', '#00ff7f', '#ff4040',
'#494f52', '#c3304a'];

//Random number function for the  quotes array of objects
function getRandomQuote(){
  var i = Math.floor(Math.random() * quotes.length);
  return quotes[i]
};

//A function that returns a random color from the variable bgColor
function getRandomColor(){
  var p = Math.floor(Math.random() * bgColor.length);
  return bgColor[p];
};




/***
Function that prints out a random quote and changes the background
color.
***/
function printQuote(){
var changeColor = getRandomColor();
var theInfo = getRandomQuote();
var html = '';
html += '<p class="quote">'+ theInfo.quote + '</p>';
html += '<p class="source">'+ theInfo.source + '';
if (theInfo.citation){
  html += '<span class="citation">' + theInfo.citation + '</span>';
}
if (theInfo.year) {
  html += '<span class="year">' + theInfo.year + '</span>';
}
if (theInfo.tag) {
  html += '<span class="year">' + theInfo.tag + '</span>';
}
html += '</p>';
document.getElementById('quote-box').innerHTML = html; //info from w3school.com
document.querySelector("body").style.background = changeColor; //info from youtube.com 'Online Tutorials'
};
printQuote();


//setInterval used to change the quote and background color every 25 seconds after the button is pressed.
document.getElementById('loadQuote').addEventListener("click", function(){
    setInterval(function(){
    printQuote();
  }, 25000);
});
