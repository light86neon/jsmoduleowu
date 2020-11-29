// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const btn =document.getElementById('myBtn');

// btn.onclick = ev => {
    // const text = document.getElementById("text");
    // text.style.display
    // ? text.style.display ='block'
    // : text.style.display = 'none'

//     if(text.style.display === 'block') {
//         text.style.display = 'none'
//     } else {
//         text.style.display ='block'
//     }
// };
// let myBtnHide = document.getElementById('myBtn-hide')
// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//     myBtnHide.onclick = ev => {
//         myBtnHide.style.display = 'none'
// };
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const btn = document.getElementById('myBtn');
//
// btn.onclick = event => {
//     const myInput = document.getElementById('myInput');
//     const value = myInput.value;
//     if (value < 18 && value > 0){
//         alert('You are so young')
//     }
//        if (value <= 0 || value > 100) {
//            alert('Incorrect value')
//         }
//     };

// - Создайте меню, которое раскрывается/сворачивается при клике
// const a1 = document.getElementById('a1');
// const subMenu = document.getElementById('subMenu');
// let flag = false;
// a1.onclick = event => {
//     if(flag){
//         subMenu.style.display ='block';
//         flag=false;
//     }else{
//         subMenu.style.display='none';
//         flag=true;
//     }
// }

// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
//  ];
// const comArr = document.getElementById('content');
// comArr.forEach(item =>{
//
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const button = document.createElement('button');
//     button.innerText = 'hide';
//     h2.innerText = item.title;
//     p.innerText = item.body;
//
//     button.onclick = () => {
//         p.hidden
//         ? p.hidden =false
//         : p.hidden = true
//     }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
// })
// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм
// (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже
// дайте формі та інпутам всі необхідні атрибути.
//
// const btn = document.getElementById('btn');
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input3 = document.getElementById('input3');
// const input4 = document.getElementById('input4');

//
//     btn.onclick= ev => {
// //         console.log(input1);`
// //         console.log(input2);
// //         console.log(input3);
// //         console.log(input4);
//         console.log(document.forms.form1.input1.value);
//         console.log(document.forms.form1.input2.value);
//         console.log(document.forms.form2.input3.value);
//         console.log(document.forms.form2.input4.value);
//     }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function table(tableTd, tableTr, element) {
//     let table = document.createElement('table');
//     for (let i = 0; i < tableTd.length; i++) {
//         let tr = document.createElement("tr");
//         table.appendChild(tr);
//         for (let j = 0; j < tableTr.length; j++) {
//             let td = document.createElement("td");
//             table.appendChild(td);
//         }
//     }
//     element.appendChild(table);
//
// }
//
// table(3, 3, document.body);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let rows = document.createElement('input');
// rows.setAttribute('placeholder', 'number of rows');
// document.body.appendChild(rows);
//
// let cells = document.createElement('input');
// cells.setAttribute('placeholder', 'number of cells');
// document.body.appendChild(cells);
//
// let data = document.createElement('input');
// data.setAttribute('placeholder','some data');
// document.body.appendChild(data);
//
// let btn = document.createElement('button');
// btn.innerText = 'create table';
// document.body.appendChild(btn);
//
// btn.onclick=(e)=> {
//     createTable(rows,cells.value,data.value)
// };
//
//
// function createTable(ntr, ntd, text) {
//     let table = document.createElement('table');
//     for (let i = 1; i <= ntr; i++) {
//         let tr = document.createElement('tr');
//        tr.setAttribute('class', 'trows');
//          for (let j = 1; j <= ntd; j++) {
//              let td = document.createElement('td');
//              td.innerText = text;
//              tr.appendChild(td);
//          }
//          table.appendChild(tr);
//     }
//  document.body.appendChild(table);
//  }
//
//  createTable(3,4,'jello')

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
// let sliderArray = [
//     {id: 1,img: '1.jpg'},
//     {id: 2,img: '2.jpg'},
//     {id: 3,img: '3.jpg'}
//     ];
//
// let slider = document.getElementById('slider');
// let img = document.createElement('img');
// let btnLeft = document.createElement('button');
// let btnRight = document.createElement('button');
//
// btnLeft.innerText = 'Left';
// btnRight.innerText = 'Right';
//
// img.style.width = '400px';
//
// let index = 0;
//
// img.src = sliderArray[index].img;
//
// slider.appendChild(img);
// slider.appendChild(btnLeft);
// slider.appendChild(btnRight);
//
// btnRight.onclick = () => {
//     index + 1 > sliderArray.length - 1 ? (index = 0) : (index = index + 1);
//     img.src = sliderArray[index].img;
// };
//
// btnLeft.onclick = () => {
//     index - 1 < 0 ? (index = sliderArray.length - 1) : (index = index - 1);
//     img.src =sliderArray[index].img;
// };

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let dictionaryBadWords = [ "stupid", "asshole"];
//
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'ok';
//
// btn.onclick = event =>{
//     for (let i = 0; i < dictionaryBadWords.length; i++) {
//         if(input.value === dictionaryBadWords[i]){
//             alert('Why did you do this?')
//         }
//
//     }
// };
//
// document.appendChild(input);
// document.appendChild(btn);
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// btn.onclick = () => {
//     for(let badWord of dictionaryBadWords) {
//         input.value.includes(badWord) ? alert('bad Boy!') : '';
//     }
// };

// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let h2 = document.getElementsByTagName('h2');
// let rules = document.getElementsByClassName('rules');
// let ul = document.createElement('ul');
// document.body.appendChild(ul);
// for(let i = 0; i < rules.length; i++) {
//     let li = document.createElement('li');
//    let a = document.createElement('a');
//     li.appendChild(a);
//     a.setAttribute('href', `#rule${i}`);
//     a.innerText = h2[i].innerText;
//     rules[i].id = `rule${i}`;
//     ul.appendChild(li);
// }
// ul.setAttribute('class', 'menu');

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// -- взять массив пользователей
let usersWithAddress = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false,
        address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true,
        address: { city: 'Kyiv', street: 'Shevchenko', number: 1 },
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true,
        address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false,
        address: { city: 'Ternopil', street: 'Shevchenko', number: 90 },
    },
    {
        id: 5,
        name: 'max',
        age: 30,
        status: true,
        address: { city: 'Lviv', street: 'Shevchenko', number: 115 },
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        status: false,
        address: { city: 'Kyiv', street: 'Shevchenko', number: 2 },
    },
    {
        id: 7,
        name: 'oleg',
        age: 28,
        status: false,
        address: { city: 'Ternopil', street: 'Shevchenko', number: 22 },
    },
    {
        id: 8,
        name: 'andrey',
        age: 29,
        status: true,
        address: { city: 'Lviv', street: 'Shevchenko', number: 43 },
    },
    {
        id: 9,
        name: 'masha',
        age: 30,
        status: true,
        address: { city: 'Kyiv', street: 'Shevchenko', number: 12 },
    },
    {
        id: 10,
        name: 'olya',
        age: 31,
        status: false,
        address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        status: true,
        address: { city: 'Ternopil', street: 'Shevchenko', number: 121 },
    },
];

let result = document.getElementById('result');
let btnFilter = document.getElementById('btnFilter');
let checkFalse = document.forms.form6.false;
let checkAge = document.forms.form6.age;
let checkCity = document.forms.form6.city;

function render (array) {
    array.forEach((value) => {
        let content = document.createElement('div');
        content.innerText = `Name: ${value.name}, Age: ${value.age}, Status: ${value.status}, City: ${value.address.city}`
        result.appendChild(content)
    })
    return result
}

render(usersWithAddress);

btnFilter.onclick = () => {
    arrayCopy = JSON.parse(JSON.stringify(usersWithAddress))

    checkFalse.checked ? arrayCopy = arrayCopy.filter(value => !value.status) : arrayCopy;
    checkAge.checked
        ? (arrayCopy = arrayCopy.filter((value) => value.age >= 29))
        : arrayCopy;
    checkCity.checked
        ? (arrayCopy = arrayCopy.filter((value) => value.address.city === 'Kyiv'))
        : arrayCopy;

    result.innerText = '';
    render(arrayCopy)
};


