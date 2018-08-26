
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
    var artist=["kanye", "drake", "eminem", "kendrick"];
    var computerChoiceLength = artist.length;
    var i = 10;
    var computerChoice = artist[getRandomInt(computerChoiceLength)];
    var charArtist = Array.from(computerChoice);
    var artistLength =computerChoice.length;
    var blank = '-'.repeat(artistLength);
    var charBlank = Array.from(blank);
    var array = [];
    trackArray = [];
 
document.onkeyup = function(event) {

  var userGuessCap = event.key;
  var userGuess = userGuessCap.toLowerCase();
  var check = charArtist.indexOf(userGuess);
  var x = 0;
  userGuessArray=Array.from(userGuess)

  if (trackArray.indexOf(userGuess) === -1) {

    function addArray(userGuess, array, userGuessArray){
      var newArray = new Array;
      if(array.indexOf(userGuess) === -1) {
      newArray = array.concat(userGuessArray);
    }
 
  if (array.indexOf(userGuess) > -1) {
    newArray = array.concat();
  }
  
  return array = newArray;
    }
 
 trackArray =addArray(userGuess, array, userGuessArray);
 document.getElementById("trackArray").innerHTML = trackArray;
 array = addArray(userGuess, array, userGuessArray);
 var n = 0;
function kelseySplice(n, artistLength, charBlank, userGuess, computerChoice) {
  var kels = "";
    for (n=0; n < artistLength; n++) {
      if (userGuess === computerChoice[n]) {
        kels =charBlank.splice(n, 1, userGuess);
      }
    }
    return charBlank = kels;
}
  
if (check>-1){
  charBlank === kelseySplice(n, artistLength, charBlank, userGuess, computerChoice);
    i=i-1
}
 
blankStringNew = charBlank.join("");
document.getElementById("blankStringNew").innerHTML = blankStringNew;

if (blankStringNew === computerChoice) {
  alert("YOU WIN!!!")
  location.reload()
}
   
if (check === -1) {
  i=i-1;
  console.log("i="+i)
}
 
if ( i<1) {
  alert("YOU LOSE!!!")
  location.reload()
}
  
document.getElementById("countdown").innerHTML = i;

 }
};