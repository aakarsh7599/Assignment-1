 function string_to_array(str)
 {
  var arr=str.split(' ');
  //document.writeln(arr);
   document.writeln("[");
 for(var i=0; i<arr.length;i++)
 {
    document.writeln("\""+arr[i]+"\"");
	if(i!=arr.length-1)
	{document.writeln(",");}
 }
 document.writeln("]")

 }
 
 string_to_array("I am a student")
