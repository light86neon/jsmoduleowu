// // - Дана textarea.
// //     В неё вводится текст.
// //     Сделайте так, чтобы после захода на эту
// //     страницу через некоторое время, введенный
// //     текст остался в textarea.
// //
// // let textArea = document.querySelector('.text-area textarea');
// // textArea.value = localStorage.getItem('textArea') || '';
// //
// // textArea.addEventListener('input', () => {
// //     let str = textArea.value;
// //     localStorage.setItem('textArea',str);
// // })
//
// // // - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// // //     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// // // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// // //     Сделайте ваш скрипт как можно более универсальным.
// //
// // class UserForm {
// //     constructor(login, email, pass, date,
// //                 volume, ratio, check, color, tel, message) {
// //         this.login = login;
// //         this.email = email;
// //         this.pass = pass;
// //         this.date = date;
// //         this.volume = volume;
// //         this.ratio = ratio;
// //         this.check = check;
// //         this.color = color;
// //         this.tel = tel;
// //         this.message = message;
// //     }
// // }
// //
// // localStorage.getItem('useForm1')
// //     ? form1Set(document.form1, JSON.parse(localStorage.getItem('useForm1')))
// //     : showAlert();
// //
// // let useFormBtm = document.querySelector('.form-with-inputs-btn');
// //
// // useFormBtm.addEventListener('click', () => {
// //     let {
// //         login: {value: login}, email: {value: email}, pass: {value: pass}, date: {value: date},
// //         volume: {value: volume}, ratio: {value: ratio}, check: {checked: check}, color: {value: color},
// //         tel: {value: tel}, message: {value: message}
// //     } = document.form1;
// //
// //     console.log(ratio);
// //     let user = new UserForm(login, email, pass, date, volume, ratio, check, color, tel, message);
// //
// //     localStorage.setItem('useForm1', JSON.stringify(user));
// // });
// //
// // function form1Set(form, obj) {
// //
// //     for (let i = 0; i < form.length; i++) {
// //         const {name} =  form[i];
// //         (name === 'check' && obj[name]) ? form [name].checked = true : form[name].checked = false;
// //         if (name === 'ratio' && obj[name] === form[name].value){
// //             form[name].checked = true;
// //         }else if ( name === 'ratio' && obj[name] === form[name].value) {
// //             form[name].checked = true;
// //         }else{
// //             form[name].value = obj [name];
// //         }
// //     }
// // }
// //
// // function showAlert(){
// //     let div = document.createElement('div');
// //     div.classList.add('alert');
// //     div.style.color = 'red';
// //     div.innerHTML = 'Write please';
// //     document.form1.appendChild(div);
// //
// // }
//
// // -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// // затем поредактировать их, затем еще поредактировать и возможно еще.....
// // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// // (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let textArea = document.querySelector('.textarea');
// let buttonDel = document.querySelector('btn-delete');
// let arrowLeft = document.querySelector('arrow-left');
// let arrowRight = document.querySelector('arrow-right');
//
// const textMaker = text => {
//     const text = document.createElement('p');
//     p.textContent = text
//     p.appendChild(p);
// }
//
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     textMaker(input.value)
//     input.value = ''
//
// })
// let itemArray = []
//
// localStorage.setItem('item', Json.stringify(itemsArray))
// const data = json.parse(localStorage.getItem('items'))
//
// function UserBook(lastname, firstname, patronymic, tel, email, firm, department, birthday, id) {
//     this.lastname = lastname;
//     this.firstname = firstname;
//     this.patronymic = patronymic;
//     this.tel = tel;
//     this.email = email;
//     this.firm = firm;
//     this.department = department;
//     this.birthday = birthday;
//     this.id = id;
// }
//
// let usrBookForm = document.userBookForm;
// let usBkDiv = document.querySelector('.user-book');
// let saveInBookBtn = document.querySelector('.user-book-btn');
// let userBookList = JSON.parse(localStorage.getItem('userBook'))||[];
//

// const form1 =  document.getElementById('form1');
//
// function saveForm(t){
//     setDataForm(t)
// }
//
// function setDataForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const tagElement = tag[i];
//         console.log(tagElement);
//         if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//             tagElement.checked
//                 ? tagElement.value = true
//                 : tagElement.value = false
//         localStorage.setItem(tagElement.id, tagElement.value)
//     }
// }
//
// function getDataForm(tag) {
//     tag.children[i].value = localStorage.getItem(tag.children[i].id);
//
//     if(tag.children[i].value === 'true'){
//         tag.children[i].setAttribute('checked','checked');
//     }
// }




// const text = document.getElementById('text');
// const arrow_left = document.getElementById('arrow_left');
// const arrow_right = document.getElementById('arrow_right');
// const save = document.getElementById('save');
//
// save.onclick = () => {
//     localStorage.setItem(localStorage.length+1, text.value)
// }
//
// arrow_left.onclick = ()=>{
//     arrow_right.style.visibility = 'visible';
//     let index;
//     for(const key in localStorage){
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if(index === '1'){
//         arrow_left.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(index - 1);
// }
//
// arrow_right.onclick = ()=>{
//     arrow_left.style.visibility = 'visible';
//     let index;
//     for(const key in localStorage){
//         if(localStorage.hasOwnProperty(key)){
//             if(localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if(index === localStorage.length.toString()){
//         arrow_right.style.visibility = 'hidden';
//         return;
//     }
//     text.value = localStorage.getItem(+index + 1);
// }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let form = document.getElementById('formContact');
let btnSave = document.getElementById('submit');
let content = document.getElementById('content');
const arrUsers = 'ARRAY_USERS';
let tempUser = {}

btnSave.onclick = (ev) => {
    //ev.preventDefault();
    let person = {...tempUser};
    for (let i = 0; i < form.children.length; i++) {
        const formElement = form.children[i];
        if (formElement.name && formElement.type !== 'submit') {
            person[formElement.name] = formElement.value;
        }
    }
    if (!person.id) {
        person.id = new Date().getTime();
    }
    console.log('person');
    console.log(person);
    saveUser(person);
}

getDataFromLocalSt();

function saveUser(user) {
    if (localStorage.hasOwnProperty(arrUsers)){
        const users = JSON.parse(localStorage.getItem(arrUsers));
        const find = users.find(x => x.id === user.id);

        if (find) {
            const filter = users.filter(x => x.id !== user.id);
            filter.push(user);
            localStorage.setItem(arrUsers, JSON.stringify(filter));
        } else {
            users.push(user);
            localStorage.setItem(arrUsers, JSON.stringify(users));}

    } else {
        localStorage.setItem(arrUsers, JSON.stringify([user]));
    }
}

function getDataFromLocalSt() {
    if (localStorage.hasOwnProperty(arrUsers)) {
        const arrayU = JSON.parse(localStorage.getItem(arrUsers));
        for (const item of arrayU) {
            //console.log(item);
            content.appendChild(createContactsList(item));
        }
    }
}

function createContactsList(user) {
    let wrap = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = `${key} : ${user[key]}`;
            wrap.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement('p');
            p.innerText = `${key} : ${user[key]}`;
            wrap.appendChild(p);
        }

    }
    wrap.style = " border : 1px solid red; width : 300px; float : left";
    let del = document.createElement('button');
    let edit = document.createElement('button');
    edit.innerText = 'Edit';
    del.innerText = 'Delete';

    edit.onclick = () => editeContact(user.id);
    del.onclick = () => deleteContact(user.id);


    wrap.appendChild(edit);
    wrap.appendChild(del);
    return wrap
}

function deleteContact(id) {
    const parse = JSON.parse(localStorage.getItem(arrUsers));
    const filter = parse.filter(x => x.id !== id);
    localStorage.setItem(arrUsers, JSON.stringify(filter));
    location.reload();
}

function editeContact(id) {
    const parse = JSON.parse(localStorage.getItem(arrUsers));
    const  user = parse.find(x => x.id === id);
    for (let i = 0; i < form.children.length; i++) {
        const formElement = form.children[i];
        if (formElement.name && formElement.type !== 'submit') {
            for (const key in user) {
                if(formElement.name === key) {
                    formElement.value = user[key];
                }
            }
        }
    }
    tempUser = user;
}

















