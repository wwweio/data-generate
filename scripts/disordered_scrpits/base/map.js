// 定义一个数组
const arr = [1, 2, 3, 4];

// 将数组中的每个元素乘以2
const newArr1 = arr.map(num => num * 2);
console.log(newArr1); // [2, 4, 6, 8]

// 定义一个包含字符串的数组
const arrStr = ['apple', 'banana', 'cherry'];

// 将数组中的字符串转换为大写形式
const newArr2 = arrStr.map(str => str.toUpperCase());
console.log(newArr2); // ['APPLE', 'BANANA', 'CHERRY']

// 定义一个包含对象的数组
const arrObj = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// 提取对象数组中的某个属性值
const names = arrObj.map(obj => obj.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// 使用箭头函数简化操作
const newArr3 = arr.map($ => $ * 2);
console.log(newArr3); // [2, 4, 6, 8]
