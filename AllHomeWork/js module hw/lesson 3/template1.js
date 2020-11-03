// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let human  = {
//     age: 33,
//     Height: 190,
//     wife: true,
//     dog: false,
//     child: true,
//     book: {
//         color: "green",
//         pages: 320,
//         name:"ABC",
//         weight: 300,
//         country:"Ukraine",
//     },
//     car: {
//         color:"darkblue",
//         name:"skoda",
//         model:"fabia",
//         year: 2014,
//         type:'universal'
//     },
//     room: {
//         stage: 7,
//         age: 35,
//         meters: 36,
//         escalator: true,
//         door: "metal"
//     }
// };
// console.log(human);

// -- Створити масив та вивести його в консоль:
//     - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
//
// let arrHuman = ['Andrii','Hulk','John','Kolya','Daniel'];
// let arrDog = ['Бульдог', 'Джек-рассел-терєр','Французький бульдог', 'Йоркширський терєр','Англійський булдог'];
// let arrCar = ['Mercedes-Benz','Skoda','Audi','Alfa-romeo','Nissan'];

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
// let arrHouse = {
//     stage: 3,
//     age: 2,
//     meters: 135,
//     escalator: false,
//     door: "metal",
//     dog: {
//         name: "Tuzik",
//         color: "Black",
//         age: 3,
//         child: false,
//         wife: false,
//     }
// };
// console.log(arrHouse);
// let arrDriver = {
//     age: 3,
//     car: {
//         age: 20,
//         color: "white",
//         model: "Skoda",
//         type: "coupe",
//         bamper: false,
// },
//     wife: true,
//     child: 3,
//     dog: true,
//     house: true
// };
// let arrToy = {
//     type: "plastic",
//     age: 3,
//     name: "Ginger",
//     height: 30,
//     house: {
//         age: 3,
//         stage: 4,
//         color: "purple",
//         escalator: false,
//         light: false
//     }
// };
//
// let arrTable = {
//     style: "retro",
//     type: "transformer",
//     color: "brown",
//     location: {
//         are: "living room",
//         stage: 3,
//         escalator: false,
//         windows: false,
//         roof: true
//     },
//     made: "Italy"
// };
//
// let arrBag = {
//     made: "China",
//     age: 3,
//     material: {
//        type: "skin",
//         color: "green",
//         animal: "crocodile",
//         manufacture: "refubished",
//         age: 2
//     },
//     model: "small bag",
//     location: "sleeping room"
// };
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[3].name);
// console.log(users[5].name,users[5].age);
// console.log(users[5].age,users[5].status,);

// -- Напишіть код,  який
// за допомоги document.getElementById
// або document.getElementsByClassName
// або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// const content = document.getElementById("content");
// console.log(content.innerText);
// - отримує текст з блоку з id "rules"
// const rules = document.getElementById("rules");
// console.log(rules.innerHTML);

// - замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById("content").textContent ="Hello my friend";
// console.log(content.innerText);
// - замініть текст параграфа з id 'rules' на будь-який інший// - замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById("rules").textContent ="another text";
// console.log(content.innerText);
// - змініть кожному елементу колір фону на червоний
// content.style.color = "yellow";
// rules.style.color = "green";
// - змініть кожному елементу колір тексту на синій
// content.style.color = "blue";
// rules.style.color = "blue";
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let idRules = document.getElementById("rules")
// for( let i = 0; i < idRules.length; i++) {
//     console.log(idRules[i]);
// }
// // - отримати всі елементи з класом fc_rules
// let element = document.getElementsByClassName('fc_rules');
// for( let i = 0; i < element.length; i++) {
//     console.log(element[i]);
// }
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
//  element = document.getElementsByClassName('fc_rules');
// for( let i = 0; i < element.length; i++) {
//     element[i].style.color = "red";
//     console.log(element[i]);
// }
//
//



















