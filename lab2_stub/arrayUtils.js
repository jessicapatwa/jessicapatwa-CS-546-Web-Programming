/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/


let arrayStats = (array) => {
  if(array.length === 0) {
    throw "Size is zero";
  }
  if(!Array.isArray(array)) {
    throw "Not an array";
  }
  if(typeof array !== "object") {
    throw "enter valid inputs";
  }


  array.sort((a, b) => a - b);
  // let array = arr;
let ansmode,median;
  //Code for Mean 
  let total = 0;
  for (let i = 0; i < array.length; i++) 
  {
    total += array[i];
  }

  //Code for Median
  median1();
  function median1() {
  const { length } = array;
  
  
  if (length % 2 === 0) {
    return (array[length / 2 - 1] + array[length / 2]) / 2;
  }
  median = array[(length - 1) / 2]; 
  return array[(length - 1) / 2];
  };

  //Code for Mode
  mode1();
  function mode1() {
  const mode = {};
  let max = 0, count = 0;

  for(let i = 0; i < array.length; i++) {
    const item = array[i];
    
    if(mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }
    
    if(count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  ansmode = max;
  return max;
  };

  let min = array[0];   //finding minimum
  let max = array[array.length-1]; //finding maximum
  let range = max-min;  //finding range
  let count = array.length;  //finding count
  let sum = total;  //finding sum

  let obj = {};

  obj.mean = total / array.length;;
  obj.median = median;
  obj.mode = ansmode;
  obj.range = range;
  obj.min = min;
  obj.max = max;
  obj.count = count;
  obj.sum = sum;
  
  return obj;


};



let makeObjects = (...arrays) => {

  if(!Array.isArray(...arrays))  throw "Input invalid";
  let i=0, obj = {};
  while(i<arrays.length)
  {
    let a = arrays[i][0];
    obj[a] = arrays[i][1];
    i++;
  }
  for(let i = 0; i<arrays.length; i++) {
    if(arrays[i].length != 2 || arrays[i].length == 0) throw "Input length invalid";
  }
  
  return obj;

};

let commonElements = (...arrays) => {


};




module.exports= {
  arrayStats, makeObjects, commonElements
}