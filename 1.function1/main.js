function reverseString(message){
var st ="";
for(var i=message.length-1; i>=0;i--){
st =st+ message[i];

}
return st;
}

alert(reverseString('hello'));