// --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль

// let  group = [];
// console.log(group);
// let userNumbers = [0,1,2,3,4];
// let userNames = ['Andrii','Anna', 'Kolya', 'Oleg','Vasyl'];
// let mix = ['Andrii','Kolya', 44, 99, false];
//
// let something = [55, 'Jackpot', "winner", 99];
// console.log(something[3]);
//
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let text = '<div>Hello</div>';
// for(let i = 1; i <= 10; i++){
//     document.write(text,i);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let text = '<div><br>Hello</div>';
// for(let i = 1; i <= 10; i++){
//     document.write('<div>Hello Andrew ${i}</div>');
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let someText = '<h1>Some Text</h1>';
// for(let i = 1; i <=20; i++){
//     document.write(someText,i);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = someText;
// let a = 0;
// while (a < 20){
// a++;
// document.write(i)
// }

// Створити масив з 10 числових елементів.
// Вивести в консоль всі його елементи в циклі.
// let arrNum = [10, 44, 55, 1, 3, 99, 22, 93, 29, 39];
//
// for (let i = 0; i < arrNum.length; i++) {
//     console.log(arrNum[i]);
// };
// // - Створити масив з 10 строкрових елементів.
// // Вивести в консоль всі його елементи в циклі.
// let arrStr = ["kolya", "vasya", "petya", "num", "str", "boolean", "frog", "guy", "Group", "male"];
//
// for (let i = 0; i < arrStr.length; i++) {
//     console.log(arrStr[i]);
// };

// - Створити масив з 10 елементів будь-якого
// типу. Вивести в консоль всі його елементи в циклі.
// let mix = ['fox',55, 'kolya', 33, true, false, true, false,false, true]
// for(let i = 0; i <mix.length; i++) {
//   {
//         console.log(mix[i]);
//     }
// }

// - Створити масив з 10 елементів числового,
// стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mix = ['fox',55, 'kolya', 33, true, false, true, false,false, true]
// for(let i = 0; i <mix.length; i++) {
//     if(typeof mix[i] === 'boolean'){
//         console.log(mix[i]);
//     }
// }


// - Створити масив з 10 елементів числового,
// стірчкового і булевого типу. За допомогою
// if та typeof вивести тільки числові елементи
// let mix = ['fox',55, 'kolya', 33, true, false, true, false,false, true]
// for(let i = 0; i <mix.length; i++) {
//     if(typeof mix[i] === 'number'){
//         console.log(mix[i]);
//     }
// }

// - Створити масив з 10 елементів числового,
// стрічкового і булевого типу. За допомогою
// if та typeof вивести тільки рядкові елементи
// let mix = ['fox',55, 'kolya', 33, true, false, true, false,false, true]
// for(let i = 0; i <mix.length; i++) {
//     if(typeof mix[i] === 'string'){
//         console.log(mix[i]);
//     }
// }

//
















// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arrOne = ['a', 'b', 'c'];
// let arrSecond = [1,2,3]
// for (let i = 1; i <= arrSecond.length; i++) {
//     arrOne.push(i);
// }
// console.log(arrOne);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let num = [1,2,3];
// console.log(num.reverse());

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let numThee = [1,2,3];
// numThee.push(4);
// numThee.push(5);
// numThee.push(6);
// console.log(numThee);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let numThee = [1,2,3];
// numThee.unshift(6);
// numThee.unshift(5);
// numThee.unshift(4);
// console.log(numThee);
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// arr.pop();
// let  deleteShift = arr.shift();
// console.log(deleteShift + ' ' + 'is deleted');

// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr = ['js', 'css', 'jq'];
// arr.shift();
// let  deleteShift = arr.pop();
// console.log(deleteShift + ' ' + 'is deleted');

// // - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// let arr =  [1,2,3,4,5];
// console.log(arr.slice(3,5));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// let arr =  [1, 2, 3, 4, 5];
// console.log(arr.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
// let arr2 =  [1, 2, 3, 4, 5];
// arr2.splice(0,3,1);
// console.log(arr2);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,0, 'a','b','c');
// console.log(arr);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,1, 'a','b');
// console.log(arr);
//
// arr.splice(5,6, 'c');
// console.log(arr);
// arr.splice(7,7, 'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr = [1, 4, 5, 117, 8, 9, 0, 9, 8];
// let emptyArr = [];
// for (let i = 0; i < arr.length; i++) {
//     emptyArr.push(arr[i]);
// }
// console.log(emptyArr);

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = prompt('num1');123
// let b = prompt('num2');231
// let c = prompt('num3');312
//
// function min(a,b,c){
//     console.log(Math.min(a,b,c));
// }
//
// let numb1 = prompt('Numb1')
// let numb2 = prompt('Numb2')
// let numb3 = prompt('Numb3')
// let arr = []
// arr.push(numb1, numb2, numb3)

// for (let hour = 0; hour < 3; hour++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${hour}:${min}:${sec}`);
//             if (hour === 2 && min === 20 && sec === 0) {
//                 min = 60;
//                 break;
//             }
//         }
//     }
// }
// let hour = 0;
// let minutes = 0;
// let second = 0;
// while (!(hour === 2 && minutes === 20 && second === 0)) {
//     second++
//     if (second === 60) {
//         second = 0
//         minutes++
//     }
//     if (minutes === 60) {
//         minutes = 0
//         hour++
//     }
//     console.log(${hour} ${minutes} ${second});
// }
//
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let sec = 0; sec <= 60; sec++){
//       for(let min = 0; min <= 60; min++){
//         console.log(`${min}:${min}`);
//     }
// }
let sec = 60;
let min = 1;

for(let sec = 0; sec < 60; sec++){
   for(let min = 0; min < 60; min++){
       console.log(`${min}:${sec}`);
   }
}
// for (let hour = 0; hour < 3; hour++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${hour}:${min}:${sec}`);
//             if (hour === 2 && min === 20 && sec === 0) {
//                 min = 60;
//                 break;
//             }
//         }
//     }
// }