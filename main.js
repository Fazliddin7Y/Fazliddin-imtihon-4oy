// 2
// function unliXarf(ttt) {
//   const vowels = 'a,A,e,E,i,I,o,O,u,U'; 
//   return ttt.split('').filter(char => !vowels.includes(char)).join(''); 
// }

// console.log(unliXarf("Salom bugun maktab hamma ertachi kelsin")); 
// console.log(unliXarf("bugun dam olish kuni")); 



// 5
// function birrinchiSon(arr) {
//     const count = {};
//     arr.forEach(num => {
//         count[num] = (count[num] || 0) + 1;
//     });
//     for (let num in count) {
//         if (count[num] % 2 !== 0) {
//             return Number(num);
//         }
//     }
// }

// console.log(birrinchiSon([2])); 
// console.log(birrinchiSon([0]));
// console.log(birrinchiSon([6, 6, 8, 9]));
// console.log(birrinchiSon([0, 1, 4, 1, 0, 6, 6, 3, 4, 6]));
// console.log(birrinchiSon([1, 2, 2, 3, 3, 3, 3, 5, 5, 5, 3, 3, 2, 2, 1]));

//6
// function findSmallestInt(arr) {
//     return Math.min(...arr);
// }

// // Example cases
// console.log(findSmallestInt([78, 56, 232, 12, 8]));  
// console.log(findSmallestInt([78, 56, 232, 12, 18]));
// console.log(findSmallestInt([78, 56, 232, 412, 228])); 
// console.log(findSmallestInt([78, 56, 232, 12, 0])); 
// console.log(findSmallestInt([1, 56, 232, 12, 8]));  



// 9
// function uchburchakYasash(q, w, e) {
//     return (q + w > e) && (q + e > w) && (w + e > q);
// }

// console.log(uchburchakYasash(1, 5, 5)); 
// console.log(uchburchakYasash(4, 9, 3)); 


// 7
// function yigindiTopish(a, b) {
//     let min = Matem.min(a, b);
//     let max = Matem.max(a, b);
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(yigindiTopish(0, -1));
// console.log(yigindiTopish(0, 1));



// 8
// function sonn(arr) {
//     let result = {};
//     arr.forEach((value, index) => {
//         result[index + 1] = value;
//     });
//     return result;
// }

// console.log(sonn([]));
// console.log(sonn(["a", "b", "c"])); 