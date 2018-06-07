
 function greatestnumbers(){

var i=0;
var j =0;
var n= window.prompt("Enter size of the array");
var arr = [];
var ans=[];
for(i=0;i<n;i++)
{
 arr[i] = window.prompt("Enter the value of the array");
 
}

var numb = window.prompt("Enter the number which should be coompared with array numbers");
for(i=0,j=0;i<n;i++)
{
 if(numb<arr[i])
  {
    ans[j]=arr[i];
    document.writeln(ans[j]);
    j++;
   }
 }
 }
 greatestnumbers();

