const li = ["dog", "cat"];
console.log(li);

const nameArr = ["田中", "山田", "松本"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index])
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

//

// 三項演算子
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(50, 20));
