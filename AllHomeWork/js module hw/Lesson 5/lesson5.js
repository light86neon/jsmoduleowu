// // // -  Створити функцію конструктор для об'єкту який описує теги
// // // Властивості
// // // -назва тегу
// // // - опис його дій
// // // - масив з атрибутами (2-3 атрибути максимум)
// // // Кожен атрибут описати як окремий який буде містити
// // // -назву атрибуту
// // // -опис дії атрибуту
// // // інформацію брати з htmlbook.ru
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// function Tag(titleOfTag,action,attrs) {
// this.titleOfTag = titleOfTag;
// this.action = action;
// this.attrs = attrs;
// }
// let titleA = "<a>";
// let actionA = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.";
// let attrsA = [
//     {titleOfTag: 'accesskey', actionOfAttr:"Активация ссылки с помощью комбинации клавиш"},
//     {titleOfTag: 'coords', actionOfAttr:"Устанавливает координаты активной области"},
//     {titleOfTag: 'download', actionOfAttr:"Предлагает скачать указанный по ссылке файл."},
// ];
// let a = new Tag(titleA,actionA,attrsA);
// console.log(a);
//
// let titleDiv = "<div>";
// let actionDiv = "Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого";
// let attrsDiv = [
//     {titleofTag: 'align', actionOfAttr: 'Задает выравнивание содержимого тега div'},
//     {titleofTag: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'},
// ];
// let div = new Tag(titleDiv,actionDiv,attrsDiv);
// console.log(div);
//
// let titleH1 = "<h1>";
// let actionH1 = 'Заголовок первого уровня';
// let attrsH1 = [
//     {titleofTag: 'align', actionOfAttr:'Определяет выравнивание заголовка.'},
//     {titleofTag: 'h2', actionOfAttr:' Настуний рівень заголовка, це не атрибут Н1.'},
// ];
// let h1 = new Tag(titleH1,actionH1,attrsH1);
// console.log(h1);
//
// let titleSpan =  'span';
// let actionSpan = 'предназначен для определения строчных элементов документа';
// let attrsSpan = [
//     {titleOfTag: 'accesskey',actionOfAttr:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'},
//     {titleOfTag: 'contextmenu',actionOfAttr:'Устанавливает контекстное меню для элемента'},
//     {titleOfTag: 'hidden',actionOfAttr:'Скрывает содержимое элемента от просмотра'},
// ];
// let span = new Tag(titleSpan, actionSpan,attrsSpan);
// console.log(span);
//
// let titleInput = 'input';
// let actionInput ='является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем';
// let attrsInput = [
//     {titleofTag: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.\n'},
//     {titleofTag: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.\n'},
//     {titleofTag: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
// ];
// let input = new Tag(titleInput, actionInput,attrsInput);
// console.log(input);
//
// let titleForm = 'form';
// let actionForm  ='устанавливает форму на веб-странице';
// let attrsForm  = [
//     {titleofTag: 'name', actionOfAttr: 'Имя формы'},
//     {titleofTag: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'},
//     {titleofTag: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'},
// ];
// let form  = new Tag(titleForm , actionForm  ,attrsForm );
// console.log(form);
//
// let titleOption ='option';
// let actionOption ='определяет отдельные пункты списка, создаваемого с помощью контейнера select.';
// let attrsOption = [
//     {titleOfTag: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfTag: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
//     {titleOfTag: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
// ];
// let titleSelect = 'select';
// let actionSelect = '';
// let attrsSelect = [
//     {titleOfTag:'accesskey',actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfTag:'autofocus',actionOfAttr :'Устанавливает, что список получает фокус после загрузки страницы.\n'},
//     {titleOfTag:'disabled', actionOfAttr:'Блокирует доступ и изменение элемента'},
// ];
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     model:"x6",
//     made:"China",
//     years: 2002,
//     speed: 260,
//     engine: 4,
//     driver :function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     },
//     info : function () {
//         console.log(`
//          model: ${this.model}
//          made: ${this.made}
//          year: ${this.years}
//          engine: ${this.engine}
//          speed: ${this.speed}
//          `);
//     },
//     increaseMaxSpeed : function (newSpeed){
//         this.speed += newSpeed;
//     },
//     changeYear :function (newValue) {
//         this.years = newValue;
//     },
//     addDriver : function (driver) {
//         this.drive = driver;
//     }
// };
//
// let xxx = {name:"Anton", age: 55 };
// car.changeYear(2222);
// console.log(car.years);


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


//
// function Car (model,made,year,speed,engine){
//     this.model = model;
//     this.made = made;
//     this.speed = speed;
//     this.engine = engine;
//     this.driver = function () {
//         console.log(`їдемо зі швидкістю ${speed} на годину`);
//     };
//     this.info = function () {
//         console.log(`
//         model: ${this.model},
//         made: ${this.made},
//         year: ${this.year},
//         engine: ${this.engine},
//         topSpeed: ${this.speed}
//         xxx:${this.xxx.name}
//         `)
//     };
//     this.increaseMaxSpeed= function (newSpeed){
//         this.speed += newSpeed;
//     };
//     this.changeYear= function (newValue) {
//          this.year = newValue;
//     };
//     this.addDriver= function (drivers) {
//          this.xxx = drivers;
//     }
// };

// створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// function Cinderella (name,age,size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let nastya = new Cinderella('Nastya', 22, 37);
// let lida = new Cinderella('Lida', 23, 36);
// let liza= new Cinderella('Lida', 24, 35);
// let olena = new Cinderella('Olena', 25, 34);
// let katya = new Cinderella('Katya', 26, 33);
// let vasylyna = new Cinderella('Vasylyna ', 27, 32);
// let orisja = new Cinderella('Orisja', 28, 31);
// let nina = new Cinderella('Nina', 29, 30);
// let julia = new Cinderella('Julia', 30, 29);
// let mari = new Cinderella('Mari', 31, 28);
//
// let girls = [nastya,lida,liza,olena,katya,vasylyna,orisja,nina,julia,mari];
//
// function Prince (name,age,shoose){
//     this.name = name;
//     this.age = age;
//     this.shoose = shoose;
//
//     this.findPrincess = (ladies) =>{
//         for(const lady of ladies){
//             if(lady.size === this.shoose) {
//                 console.log(`${this.name} and ${lady.name} go married`);
//                 break;
//             }
//         }
//     }
// }
//
// let kolya = new Prince('Kolya',30, 37) ;
// kolya.findPrincess(girls);









