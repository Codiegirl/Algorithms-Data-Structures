// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   const found = str.match(/[aeiou]/gi)//g makes sure you don't stop. i is case sensitive
   //if found is an array return found.length. if null return 
   return found ? found.length : 0;
}

module.exports = vowels;



// let counter = 0;
//     const letters = ['a', 'e', 'i', 'o', 'u'];

//     for (let elem of str.toLowerCase()){
//         if (letters.includes(elem)){
//             counter ++
//         }
//     }

//     return counter