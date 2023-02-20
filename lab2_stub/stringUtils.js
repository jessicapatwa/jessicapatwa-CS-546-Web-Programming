/* Todo: Implment the functions below and then export them
      using the module.exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

let palindromes = (string) => {
      if(typeof string !== 'string') throw 'Input not an string';
      if(string.trim().length <= 0) throw 'Input string empty';
      let ans = []
      let Stringvar = " ";
      for(let i = 0; i<string.length; i++) 
      {
            if (string[i] == "")
            {
                  let str=Stringvar;
                  Stringvar = Stringvar.toLowerCase() ;
                  let arrayString = Stringvar.split("");
                  let constString = arrayString.reverse() ;
                  let reversedTempString = constString.join("");
                  if(Stringvar != "" && reversedTempString===Stringvar) ans.push(str);
                  Stringvar = ""; 
            }
            else {
                  let charVal = string.charCodeAt(i) ;
                  if((charVal > 96 && charVal < 123) || (charVal > 64 && charVal < 91)) tempString += string[i];
            }
}
return ans;
};





let replaceChar = (string) => {

      if(typeof string !== 'string') throw 'Input not an string';
      if(string.trim().length <= 0) throw 'Input string empty';

      let flag = true;
      String.prototype.replaceAt = function(index, replacement) {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length);
      }
      for (let i=0; i<string.length; i++) {
            if(i%2 == 1) {
                  if(flag) {
                        string = string.replaceAt(i, "*");
                        flag = false;
                  }
                  else {
                        string = string.replaceAt(i, "$");
                        flag = true;
                  }
                  
            }
      }

      return string;
};

let charSwap = (string1, string2) => 
{
      if (string1.length < 1 || string2.length < 1) 
      {
        throw "Throws error"
      }
      if (!string1 || !string2)
      {
        throw "Throws error"
      }
      if(string1.length<4||string2.length<4)
      {
            throw "Throws error"
      }
      let newString = "";
      let count=0;

      for(let i= 0; i< string2.length; i++)
      {
            newString += string2[i]
      if(count >= 3)
      {
            for(let j = 4 ; j<string1.length; j++)
            {
             newString += string1[j]
            }
            break;
      } 
            count +=1
      } 
      newString +=""
      for (let i = 0 ; i < string1.length ; i++)
      {   
            newString += string1[i]
            if (i >= 3)
            {
             for(let j = 4; j< string2.length; j++)
               {
                newString += string2[j]
               }
             break;
            }
            count += 1
      }
      console.log(">print", newString)
};


module.exports= {
      palindromes, 
      replaceChar, 
      charSwap
    }