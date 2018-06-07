

var year = window.prompt("Year is:");
var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
document.writeln( x );
