/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  for(let i=0; i<arr.length; i++){
    if(isNaN(arr[i]) !== true && isFinite(arr[i])){
        var arrMax = arr[i];
    }
}

for(let i=0; i<arr.length; i++){
    if(isNaN(arr[i]) !== true && isFinite(arr[i])){
        if (arr[i]> arrMax)
         arrMax = arr[i];
    }
}
return arrMax;

};

export default max;
