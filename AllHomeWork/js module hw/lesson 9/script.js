// let energy = 1000;
//
// function msg(msg, en) {
//     console.log(msg);
//     console.log(`В мене залишилось ${en} енергії`)
//     console.log('********');
// }
//
// function wakeUp(en, cb) {
//     setTimeout(() => {
//         en -= 200;
//         if (en <= 0) {
//             cb('Проспав')
//             return;
//         }
//         msg('Проснувся о 7-00', en)
//         cb(null, en)
//     }, 3000)
// }
//
// function eat(en, cb) {
//     setTimeout(() => {
//         en += 200;
//         msg('Поснідав', en)
//         cb(null, en)
//     }, 2000)
// }
//
// function goToWork(en, cb) {
//     setTimeout(() => {
//         en -= 1000;
//         if (en <= 0) {
//             cb('Передумав працювати, пішов в кіно');
//             return;
//         }
//         msg('Прийшов на роботу', en)
//         cb(null, en)
//     }, 500)
// }
//
// function goToHome(en, cb) {
//     setTimeout(() => {
//         en -= 500;
//         if (en <= 0) {
//             cb('Згадав що ніде не працюю, вернувся в ліжко')
//             return;
//         }
//         msg('Прийшов додому', en)
//         cb(null, en)
//     }, 4000)
// }
//
// function sleep(en, cb) {
//     setTimeout(() => {
//         en = 1000
//         msg('Заснув', en)
//         cb(null, en)
//     }, 600)
// }
//
// wakeUp(energy, (err,data)=>{
//     if (err){
//         console.log(err);
//         return;
//     }
//     eat(data, (err, data)=>{
//         goToWork(data, (err, data)=>{
//             if (err){
//                 console.log(err);
//                 return ;
//             }
//             eat(data, (err, data)=>{
//                 goToHome(data, (err, data)=>{
//                     if (err){
//                         console.log(err)
//                         return ;
//                     }
//                     sleep(data, (err, data)=>{
//
//                     })
//                 })
//             })
//         })
//     })
// })
// ///////////////////////////////////////////////////////////////////////////
//
// function wakeUp(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 200;
//             if (en <= 0) {
//                 reject('Проспав роботу')
//             }
//             msg('Прокинувся', en)
//             resolve(en)
//         }, 2000)
//     })
// }
//
// function eat(en) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             en += 200;
//             msg('Поїв', en)
//             resolve(en)
//         }, 1000)
//     })
// }
//
// function goToWork(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 500;
//             if (en <= 0) {
//                 reject('Машина не завелась не потріапив на роботу');
//             }
//             msg('Прийшов на роботу', en)
//             resolve(en)
//         }, 500)
//     })
// }
//
// function goToHome(en) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             en -= 500;
//             if (en <= 0) {
//                 reject('забув де я')
//                 return;
//             }
//             msg('Я вдома', en)
//             resolve(en)
//         }, 4000)
//     })
// }
//
// function sleep(en) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             en = 1000
//             msg('Ліг спати ', en)
//             resolve(en)
//         }, 600)
//     })
// }
//
// wakeUp(energy).then(value => {
//     return eat(value)
// }).then(value => {
//     return goToWork(value)
// }).then(value => {
//     return eat(value)
// }).then(value => {
//     return goToHome(value)
// }).then(value => {
//     return sleep(value)
// }).catch(err =>console.log(err) );

// async function myDay() {
//     try {
//         let wakeUp = await message(true, 'Прокинувся');
//         console.log(wakeUp.msg);
//         console.log('--------------');
//
//         let eat = await message(true, 'Поснідав');
//         console.log(eat.msg);
//         console.log('--------------');
//
//         let goToWork = await message(true, 'Прийшов на роботу');
//         console.log(goToWork.msg);
//         console.log('--------------');
//
//         let goToHome = await message(true, 'Пішов додому');
//         console.log(goToHome.msg);
//         console.log('--------------');
//
//         let sleep = await message(true, 'Заснув');
//         console.log(sleep.msg);
//         console.log('--------------');
//
//         // } catch (e) {
//         //     console.log(e.msg);
//         // }
//
// }.finally
// {
//     console.log('Bye');
// }
//
// myDay();
