
function first(a,n)
{
 var i =0;
 if(n>0){
  document.writeln(a[0]);
  for(i = 1;i<n;i++)
  {
    document.writeln(" "+a[i]);
   }}
  if(n<0)
  {
   document.writeln("[]");
   }
   return;
   }
   first([1,2,3,4,5],3);
  
