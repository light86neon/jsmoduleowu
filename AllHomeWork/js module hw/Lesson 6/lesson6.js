// - создать массив с 20 числами.
// let array = [2,4,1,55,22,770,23,550,12,66,33,22,11,223,44,211,1,1,222,87];
// -- при помощи метода sort и колбека отсортировать массив.
// let sort = array.sort((a, b) => {
//    return a - b; // -1
//  });

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// let sortReverse = array.sort((a, b) => {
//     return b - a; // -1
// });
//
// console.log(sortReverse);
// -- при помощи filter получить числа кратные 3

// console.log(array);
// let filter = array.filter(function (array){
//     return array % 3 === 0});
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filterTen = array.filter(function (array){
//     return array % 10 === 0});
// console.log(filterTen);

// -- перебрать (проитерировать) массив при помощи foreach()
// let eachArray = array.forEach(elem => console.log(elem));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let mapArray = array.map((numbers) => {
//     return numbers * 3;
// });
// console.log(mapArray);

// - создать массив со словами на 15-20 элементов.
// let words = ['one', 'awo', 'three', 'four', 'Aive', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'sixteen', 'seveteen', 'guys', 'roberto'];
// -- отсортировать его по алфавиту в восходящем порядке.
// console.log(words.sort((a,b)=> b > a ? -1 : 1));
// -- отсортировать его по алфавиту  в нисходящем порядке.
// console.log(words.sort((a,b)=> b < a ? -1 : 1));
// -- отфильтровать слова длиной менее 4х символов
// let lengthArray = words.filter(words => words.length < 5);
// console.log(lengthArray)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let newMap = words.map((value, index) => {
//     return value + '!';
// });
// console.log(newMap);
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let usersNews = [ {name: 'vasya', age: 31, status: false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortUsersNews = usersNews.sort((a,b)=>{
//   return a.age - b.age
// });
// console.log(sortUsersNews);

// let sortUsersDown = usersNews.sort((b,a) => {
//   return b.age - a.age
// });
// console.log(sortUsersDown);

// - пройтись по ньому та додати кожному юзеру поле id - яке
// характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let newIdUsers = usersNews.map((x, i) => {
//   x.id = i + 1;
//   return x
// });
// console.log(newIdUsers);
// відсортувати його за індентифікатором

// let newIdDown = usersNews.sort((a, b) => {
//   if (a.id < b.id) {
//     return -1;
//   }
//   return 1;
// });
//
// console.log(newIdDown);
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250

// - сили більше 250  + виробник бмв
// let cars = [{
//     producer: "subaru",
//     model: "wrx",
//     year: 2010,
//     color: "blue",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 400
// }, {
//     producer: "subaru",
//     model: "legacy",
//     year: 2007,
//     color: "silver",
//     type: "sedan",
//     engine: "ez30",
//     volume: 3,
//     power: 250
// }, {
//     producer: "subaru",
//     model: "tribeca",
//     year: 2011,
//     color: "white",
//     type: "jeep",
//     engine: "ej20",
//     volume: 2,
//     power: 300
// }, {
//     producer: "subaru",
//     model: "leone",
//     year: 1998,
//     color: "yellow",
//     type: "sedan",
//     engine: "ez20x",
//     volume: 2,
//     power: 140
// }, {
//     producer: "subaru",
//     model: "impreza",
//     year: 2014,
//     color: "red",
//     type: "sedan",
//     engine: "ej204x",
//     volume: 2,
//     power: 200
// }, {
//     producer: "subaru",
//     model: "outback",
//     year: 2014,
//     color: "red",
//     type: "hachback",
//     engine: "ej204",
//     volume: 2,
//     power: 165
// }, {
//     producer: "bmw",
//     model: "115",
//     year: 2013,
//     color: "red",
//     type: "hachback",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "315",
//     year: 2010,
//     color: "white",
//     type: "sedan",
//     engine: "f15",
//     volume: 1.5,
//     power: 120
// }, {
//     producer: "bmw",
//     model: "650",
//     year: 2009,
//     color: "black",
//     type: "coupe",
//     engine: "f60",
//     volume: 6,
//     power: 350
// }, {
//     producer: "bmw",
//     model: "320",
//     year: 2012,
//     color: "red",
//     type: "sedan",
//     engine: "f20",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e200",
//     year: 1990,
//     color: "silver",
//     type: "sedan",
//     engine: "eng200",
//     volume: 2,
//     power: 180
// }, {
//     producer: "mercedes",
//     model: "e63",
//     year: 2017,
//     color: "yellow",
//     type: "sedan",
//     engine: "amg63",
//     volume: 3,
//     power: 400
// }, {
//     producer: "mercedes",
//     model: "c250",
//     year: 2017,
//     color: "red",
//     type: "sedan",
//     engine: "eng25",
//     volume: 2.5,
//     power: 230
// }];
// let powerCars = cars.filter(value => value.power > 250);
// console.log(powerCars);
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let bigPowerCars = cars.reduce((acc, vale) => {
//   if (vale.volume > 3) {
//     vale.cars = true;
//     acc.push(vale);
//   }
//   return acc;
// }, []);
// console.log(bigPowerCars);

// - двигун = 2л
// let bigTwoLitresCars = cars.reduce((acc, vale) => {
//     if (vale.volume > 2) {
//         vale.cars = true;
//         acc.push(vale);
//     }
//     return acc;
// }, []);
// console.log(bigTwoLitresCars);

// виробник мерс
// let findMerc = cars.find(cars => cars.producer.includes('mercedes'));//знайходить тільки перший
// let oldMerc = cars.filter(value => value.producer == 'mercedes');//знайходить всі mercedes
// console.log(oldMerc);

// - двигун більше 3х літрів + виробник мерседес

// let bigPowerMercedes = cars.reduce((acc, vale) => {
//   if (vale.volume > 3) {
//     vale.cars = true;
//     acc.push(vale);
//   }
//   return acc;
// }, [producer='mercedes']);
// console.log(bigPowerMercedes);

//- двигун більше 3х літрів + виробник субару
// let bigPowerSubaru = cars.reduce((acc, vale) => {
//     if (vale.volume > 3) {
//         vale.cars = true;
//         acc.push(vale);
//     }
//     return acc;
// },[producer: "subaru"]);
// console.log(bigPowerSubaru);

// let tmp = cars.filter(value => value.volume >= 3 && value.producer==="subaru");
// console.log(tmp);

// сили більше ніж 300
// let tmp = cars.filter(value => value.power >= 300);
// console.log(tmp);

// - мотор серіі ej
// let namesEngine = cars.findIndex(value => value.engine.startsWith('ej'));
// let namesEngine = cars.filter(cars => cars.engine.startsWith('ej'));
// console.log(namesEngine);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let namesEngine = cars.filter(cars => (cars.engine.startsWith('ej') )&& (cars.producer === "subaru" )&& (cars.volume > 3));
// console.log(namesEngine);

// - двигун меньше 3х літрів + виробник мерседес
// let namesEngine = cars.filter(cars =>(cars.producer === "mercedes" )&& (cars.volume > 3));
// console.log(namesEngine);

// - двигун більше 2л + сили більше 250
// let namesEngine = cars.filter(cars =>(cars.power > 250 )&& (cars.volume > 2));
// console.log(namesEngine);

// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// usersWithAddress.sort((a,b) => a.id - b.id);

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a,b) => b.id - a.id);

// -- отсортировать его по  пользователей возрасту
// usersWithAddress.sort((a,b) => a.age - b.age);

// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a,b) => b.age - a.age);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort((a,b) => {
// if (b.name > a.name) {
//     return-1;
// }
// if (a.name > b.name){
//     return 1;
// }
// return 0;
// });

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a,b) => {
// if (b.name > a.name) {
//     return 1;
// }
// if (a.name > b.name){
//     return -1;
// }
// return 0;
// });

// -- отсортировать его по названию улицы  в алфавитном порядке
// if (b.address.street > a.address.street) {
//     return -1;
// }
// if (a.address.street > b.address.street){
//     return 1;
// }
// return 0;
// });

// -- отсортировать его по номеру дома по возрастанию
// if (b.address.number > a.address.number) {
//     return -1;
// }
// if (a.address.number > b.address.number){
//     return 1;
// }
// return 0;
// });

// -- отфильтровать (оставить) тех кто младше 30
// let ageUnder30 = usersWithAddress.filter(a => a.age < 30);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let statusFalse = usersWithAddress.filter(user => !user.status);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let statusAge = usersWithAddress.filter(user => !user.status && user.age < 30);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let nuberHouseEven = usersWithAddress.filter(user => !(user.address.number % 2));