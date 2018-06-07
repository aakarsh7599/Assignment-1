var x = window.prompt("Give a number:");
var n=0;
var rem=0;
while(x!=0)
{
 rem=x%10;
 n=n*10+rem;
 x=Math.floor(x/10);
}
document.write(n);
