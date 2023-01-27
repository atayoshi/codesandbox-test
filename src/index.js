/**
 * const, letの変数宣言
 */
// var val1 = 'varを宣言';
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val4 = {
//   name: "adachi",
//   age: 28
// };

// val4.name = "じゃけぇ";
// val4.addres = "hiroshima";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// function func1(str) {
//   return str;
// }

// const func1 = function(str){
//   return str;
// };

// console.log(func1("hello"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// const myProfile = {
//   name: "じゃけぇ",
//   age : 28
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name] = myProfile;
// const message4 = `名前は${name}です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト")=> console.log(`こんんいちは${name}さん!`);
// sayHello("じゃけぇ");

/**
 * スプレッド構文...
 */

// const arr1 = [3, 2, 3];
// //  console.log(arr1);
// //  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //  sumFunc(arr1[0], arr1[1]); と同じ
// sumFunc(...arr1);　　// 結果は5

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// //参考：イコールで配列をコピーすると、参照渡しになり、元の配列も影響を受ける
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const nameArr = ["田中", "yamada", "jyake"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// nameArr.map((name, index)=> console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jyake"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// })

// console.log(newNameArr);

// const num = '1300';
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number'? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100? '100を超えています':'許容範囲内です';
// }

// console.log(checkSum(50, 40));
