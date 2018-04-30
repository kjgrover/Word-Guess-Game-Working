
 
function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
   }

var artist=["kanye", "drake"];

 console.log("artist "+artist)

var computerChoiceLength = artist.length;

console.log("artistlength "+computerChoiceLength) 

var i = 10;

var computerChoice = artist[getRandomInt(computerChoiceLength)];

console.log("computerChoice "+computerChoice)

var charArtist = Array.from(computerChoice);
 
console.log("charArtist "+charArtist)

artistLength =computerChoice.length;

console.log("artistlength "+artistLength)

blank = '-'.repeat(artistLength);

console.log("blank "+blank)

blankString = Array.from(blank);

console.log("blankstring "+blankString)


document.onkeyup = function(event) {

var userGuess = event.key;

console.log("userguess "+userGuess)


var check = charArtist.indexOf(userGuess);

console.log("check "+check)



if (check>-1){
  
  blankString.splice(check, 1, userGuess);

  console.log("NEW BLANK STRING "+blankString)

  i=i-1

  console.log("i="+i)
}



blankAssString = blankString.join("");

console.log("blankAssString "+blankAssString)



if (blankAssString === computerChoice) {

  console.log("YOU WIN")
}


if (check === -1) {

  i=i-1;

  console.log("i="+i)

}

if ( i<1) {

  location.reload()
}




 } 