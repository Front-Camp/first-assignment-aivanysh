/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  
function isAN(value) {
  if(value instanceof Number)
    value = value.valueOf(); 
  return  isFinite(value) && value === parseInt(value, 10);
}

    let arrSum = 0;
  for(let i=0; i<arr.length; i++){
      if(isAN(arr[i])==true){
          arrSum += arr[i];
      }
  }
  return arrSum;
};

export default sumElements;
