function alphabetSort(message){
    var arr = message.split('');
   
    
  
      for(var i =0;i <arr.length-1;i++){
          for(var j =i+1;j<arr.length;j++){
           if(arr[i]>arr[j]){
              var tmp = arr[i];
              arr[i] = arr[j];
              arr[j] = arr[i];
  
           }
              }
          }
  return arr.join('');
  }  
    console.log(alphabetSort('hello')); // should return 'ehllo'