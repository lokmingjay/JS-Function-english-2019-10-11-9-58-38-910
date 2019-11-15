function palindrome(message){
    // wirte your code here 
    
    for (var i = 0; i< message.length/2-1;i++){
    if(message[i]!= message[message.length-1-i]){
        return false;
    }
    
}
return true;
}
  console.log(palindrome('hello')); // should return false
  console.log(palindrome('abcba'))
