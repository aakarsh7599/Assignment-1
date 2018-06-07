var random =Math.floor((Math.random() * 10) +1);
var x = window.prompt("Guess a number between 1 and 10");
if(random==x)
{document.writeln("Match found!");}
else
{document.writeln("No match!");}
document.writeln("Random:"+random);
document.writeln("Guessed:"+x);
