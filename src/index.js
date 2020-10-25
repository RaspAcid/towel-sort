
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = matrix;
  if(Array.isArray(arr)){
  for(let i = 0; i<arr.length; i++){
    if(i & 1){
    for(let j = 0; j<arr[i].length; j++){
      for(let k = 0; k<arr[i].length; k++){
        if(arr[i][k]<arr[i][k+1]){
          var temp = arr[i][k+1]; 
          arr[i][k+1] = arr[i][k]; 
          arr[i][k] = temp;
          }
        }
      }
    }else{
      for(let j = 0; j<arr[i].length; j++){
        for(let k = 0; k<arr[i].length-i; k++){
          if(arr[i][k]>arr[i][k+1]){
            var temp = arr[i][k+1]; 
            arr[i][k+1] = arr[i][k]; 
            arr[i][k] = temp;
            }
          }
        }
      }
    }

    let arr2 = [];
    for (let subArr of arr) {
	    for (let elem of subArr) {
		  arr2.push(elem);
	    }
    }

    return arr2;
  }else{
    return [];
  }
}
