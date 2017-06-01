//returns string all uppercase
function shout(string) {
  return string.toUpperCase()
}

//returns string all lowercase
function whisper(string) {
  return string.toLowerCase()
}

//logs string all uppercase
function logShout(string)  {
  string = string.toUpperCase()
  console.log(string);
}

//logs string all lowercase
function logWhisper(string){
  string = string.toLowerCase()
  console.log(string);
}

//uses if statements to give grandma's response to specific cases
function sayHiToGrandma(string){
   if (string === string.toUpperCase()) {
     return "YES INDEED!"
   }
   if (string === string.toLowerCase()) {
     return "I can\'t hear you!"
   }
   if (string === "I love you, Grandma.") {
     return "I love you, too."
   }
}
