function countWords(message){
    // wirte your code here
    var arr = message.split(' ');
    return arr.length;
  }
  alert(
  countWords('Good morning, I love JavaScript.')); // should return 5