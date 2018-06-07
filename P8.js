 function upper(str1)
{
  var arr = str1.split(' ');
  var newarr= [];
    
  for(var x = 0; x < arr.length; x++){
      newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newarr.join(' ');
}
document.writeln(upper("i am a student"));

