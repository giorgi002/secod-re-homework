// first task 👇

// function countNumbers(string){
//     return string.map(char => char.toString().length)

// }
// const numbers = [123,45,6];
// console.log(countNumbers(numbers));



 // second task 👇
// const numbers = [1,2,3];
// let reversed = [];
// for(let i = numbers.length -1; i>=0;i--){
//     reversed.push(numbers[i])
// }
// console.log(reversed);




 // third task 👇
// function sumOfSquares(numbers){
//     return numbers.reduce((sum,square) => sum + square**2);
// }

// const numbers = [1,2,3];
// console.log(sumOfSquares(numbers));





 // forth task 👇
// function countNumbers(numbers){
//     return numbers.map(char => char.length,0)
// }
// const words = ["a", "ab", "abc"];
// console.log(countNumbers(words));




// fifth task 👇
// function findPalindrome(words){
//     return words.filter(word =>{
//         const reversed = word.split("").reverse().join("");
//         return word == reversed;
//     })
// }
// const words =  ['level', 'giga', 'ana', 'button', 'abba'];
// console.log(findPalindrome(words));




// // sixth task 👇 
// function filterCharacter(words){
//     const filteredWords = [];
//     const removedWords = [];
//     for(let i =0;i< words.length;i++){
//         if(/^[a-zA-Z0-9]+$/.test(words[i])){
//             filteredWords.push(words[i]);
//         } else{
//             removedWords.push(words[i])
//         }
// }
// return {filteredWords,removedWords}
// }
// let words = ['hello', 'world!', 'foo', 'bar@', 'baz', 'test#123'];
// console.log(filterCharacter(words));
