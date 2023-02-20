/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
const {arrayStats, makeObjects, commonElements} = require('./arrayUtils')
const {deepEquality, commonKeysValues, calculateObject} = require("./stringUtils")
const {palindromes, replaceChar, charSwap} = require("./arrayUtils")

//////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const arrayStatsOne = arrayStats([7, 9, 11, 15, 19, 20, 35, 0]);
    console.log('arrayStats passed successfully.');
} catch (e) {
    console.log('arrayStats failed test case', e);
}

try {
    // Should Fail
    const arrayStatsTwo = arrayStats(["guitar", 1, 3, "apple"]);
    console.log('arrayStats did not error');
} catch (e) {
    console.log('arrayStats failed successfully', e);
}
//////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const makeObjectsOne = makeObjects(["foo", "bar"], ["name", "Patrick Hill"], ["foo", "not bar"]);
    console.log('makeObjects passed successfully.');
} catch (e) {
    console.log('makeObjets failed test case', e);
}

try {
    // Should Fail
    const makeObjectsTwo = makeObjects(["guitar", 1, 3, "apple"]);
    console.log('makeObjects did not error');
} catch (e) {
    console.log('makeObjets failed successfully', e);
}
////////////////////////////////////////////////////////////////////////////////////////////

try {
    // Should Pass
    const commonElementsOne = commonElements([20, 5]);
    console.log('comonElements passed successfully');
} catch (e) {
    console.log('comonElements failed test case', e);
}
try {
    // Should Fail
    const commonElementsTwo = commonElements([1,2,"nope"]);
    console.log('commonElements did not error');
} catch (e) {
    console.log('commonElements failed successfully', e);
}
////////////////////////////////////////////////////////////////////////////////////////////


try {
    // Should Pass
    const palindromesOne = palindromes("Hi mom, At noon, I'm going to take my kayak to the lake");
    console.log('palindromes passed successfully');
} catch (e) {
    console.log('palindromes failed test case', e);
}
try {
    // Should Fail
    const palindromesTwo = palindromes(["hello there"]);
    console.log('palindromes did not error');
} catch (e) {
    console.log('palindromes failed successfully', e);
}
//////////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const replaceCharOne = replaceChar("Hello, How are you? I hope you are well");
    console.log('replaceChar passed successfully');
} catch (e) {
    console.log('replaceChar failed test case', e);
}
try {
    // Should Fail
    const replaceCharTwo = replaceChar(123);
    console.log('replaceChar did not error');
} catch (e) {
    console.log('replaceChar failed successfully', e);
}

//////////////////////////////////////////////////////////////////////////////////////////////

try {
    // Should Pass
    const charSwapOne = charSwap("Patrick", "Hill");
    console.log('charSwap passed successfully.');
} catch (e) {
    console.log('charSwap failed test case', e);
}
try {
    // Should Fail
    const charSwapTwo = charSwap("Patrick", "");
    console.log('charSwap did not error');
} catch (e) {
    console.log('charSwap failed successfully', e);
}
//////////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const deepEqualityOne = deepEquality({ a: { sA: "Hello", sB: "There", sC: "Class" }, b: 7, c: true, d: "Test" }, { c: true, b: 7, d: "Test", a: { sB: "There", sC: "Class", sA: "Hello" } });
    console.log('deepEquality passed successfully');
} catch (e) {
    console.log('deepEquality failed test case', e);
}
try {
    // Should Fail
    const deepEqualityTwo = deepEquality([1,2,3], [1,2,3]);
    console.log('deepEquality did not error');
} catch (e) {
    console.log('deepEquality failed successfully', e);
}

//////////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const commonKeysValuesOne = commonKeysValues({ name: { first: "Patrick", last: "Hill" }, age: 46 }, { school: "Stevens", name: { first: "Patrick", last: "Hill" } });
    console.log('commonKeysValues passed successfully');
} catch (e) {
    console.log('commonKeysValues failed test case', e);
}
try {
    // Should Fail
    const commonKeysValuesTwo = commonKeysValues("foo", "bar");
    console.log('commonKeysValues did not error');
} catch (e) {
    console.log('commonKeysValues failed successfully', e.substring(0, 16));
}

//////////////////////////////////////////////////////////////////////////////////////////////
try {
    // Should Pass
    const calculateObjectTwo = calculateObject({ a: 3, b: 7, c: 5 }, n => n * 2);
    console.log('calculateObject passed successfully');
} catch (e) {
    console.log('calculateObject failed test case', e);
}
try {
    // Should Fail
    const calculateObjectTwo = calculateObject();
    console.log('calculateObject did not error');
} catch (e) {
    console.log('calculateObject failed successfully', e);
}



























// console.log(array.arrayStats([9,15,25.5, -5, 5, 7, 10, 5, 11, 30, 4,1,-20]));
// console.log(array.arrayStats([7, 9, 11, 15, 19, 20, 35, 0]));
// console.log(array.arrayStats([11, 54, 79, 5, -25, 54, 19, 11, 56, 100]));
// console.log(array.arrayStats([]));
// console.log(array.arrayStats("banana"));
// console.log(array.arrayStats(["guitar", 1, 3, "apple"]));
// console.log(array.arrayStats());

// console.log(array.makeObjects([4, 1], [1, 2]));
// console.log(array.makeObjects(["foo", "bar"], [5, "John"]));
// console.log(array.makeObjects(["foo", "bar"], ["name", "Patrick Hill"], ["foo", "not bar"]));
// console.log(array.makeObjects([true, undefined], [null, null]));
// console.log(array.makeObjects([undefined, true], ["date", "9/11/2022"]));
// console.log(array.makeObjects([4, 1, 2], [1,2]));
// console.log(array.makeObjects("  "));

// console.log(string.palindromes("Hi mom, At noon, I'm going to take my kayak to the lake"));
// console.log(string.palindromes("Wow! Did you see that racecar go?"));
// console.log(string.palindromes("Hello World"));
// console.log(string.palindromes());
// console.log(string.palindromes("   "));




// console.log(string.replaceChar("Mommy"));
// console.log(string.replaceChar("Hello, How are you? I hope you are well"));
// console.log(string.replaceChar(""));
// console.log(string.replaceChar(123));

// console.log(string.replaceChar("daddy"));
// console.log(string.replaceChar("Mommy"));
// console.log(string.replaceChar("Hello, How are you? I hope you are well"));
// console.log(string.replaceChar(""));
// console.log(string.replaceChar(123));


// console.log(charSwap("Patrick", "Hill")); //Returns "Hillick Patr"
// console.log(charSwap("hello", "world")); //Returns "worlo helld"
// console.log(charSwap("Patrick", "")); //Throws error
// console.log(charSwap()); // Throws Error
// console.log(charSwap("John")) // Throws error
// console.log(charSwap ("h", "Hello")) // Throws Error
// console.log(charSwap ("h","e")) // Throws Error