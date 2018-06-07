var d = new Date();
for(var i = 2014; i<=2050;i++)
{
 d.setFullYear(i,0,1);
 if(d.getDay()===0)
 {
   document.writeln("<br>In the year"+i+"Jan 1st is Sunday!<br>");
 }
}