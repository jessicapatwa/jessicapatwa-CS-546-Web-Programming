// Question 1

function questionOne(arr) {
   let count = 0;
   let res = [];
    for(let i = 0 ; i<arr.length ; i++) {
      count = 0;
      for(let a = arr[i]; a>=1; a--) {
        if(arr[i]%a === 0) {
          count++;
        }
      }
    if(count === 2) {
      res[i] = 'true';
    }
    else {
      res[i] = "false";
    }
  }
  return res;
}


//Question 2

function questionTwo(startingNumber, commonRatio, numberOfTerms) {
  let sum = startingNumber;
  let s1 = startingNumber;
  let commonRatio1 = commonRatio;
  let noTerms = numberOfTerms;

  if (commonRatio1===0) {
    return 0;
  }
if (noTerms<=0){
  return NaN;
}
  for(let i = 1 ; i<noTerms; i++) {
    sum = sum + s1 * Math.pow(commonRatio1,i);
  }
return sum;
}


// Question 3

function questionThree(str) 
{
    var countConsonants = 0;
    let str1 = str.toLowerCase();
    for (let i = 0; i < str.length; i++) 
    { 
      if ( str1.charCodeAt(i) <= 122 && str1.charCodeAt(i) >= 97) 
      {
        if (str1[i] !== "a" && str1[i] !== "e" && str1[i] !== "i" &&
        str1[i] !== "o" && str1[i] !== "u") 
        {
          
          countConsonants++;
        }
      }
    }
    return (countConsonants);
}
  

// Question 4

function questionFour(fullString, substring) 
{
  let str1 = fullString.split(" ");
  let str2 = str1.join();
  let res = str2.split(substring);

  return(res.length-1);

}


//firstName, lastName and studentId
module.exports = {
  firstName: 'Jessica',
  lastName: 'Patwa',
  studentId: '20011972',
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
