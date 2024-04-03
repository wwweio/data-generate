// 创建一个数组
let arr = [1, 2, 3, 4, 5];

// 访问数组元素
let firstElement = arr[0];
console.log("访问数组元素：", firstElement);

// 修改数组元素
arr[1] = 6;
console.log("修改数组元素：", arr);

// 添加元素到数组
arr.push(7);
console.log("添加元素到数组末尾：", arr);

arr.unshift(0);
console.log("添加元素到数组开头：", arr);

// 删除数组元素
arr.pop();
console.log("删除数组末尾的元素：", arr);

arr.shift();
console.log("删除数组开头的元素：", arr);

// 数组长度
let length = arr.length;
console.log("数组长度：", length);

// 迭代数组
console.log("迭代数组：");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 使用forEach方法遍历数组
console.log("使用forEach方法遍历数组：");
arr.forEach(item => {
    console.log(item);
});

// 数组方法
let newArray = arr.concat([8, 9]);
console.log("使用concat方法连接数组：", newArray);

let slicedArray = arr.slice(1, 3);
console.log("使用slice方法返回数组的一部分：", slicedArray);

arr.splice(2, 1, 10);
console.log("使用splice方法修改数组内容：", arr);

let index = arr.indexOf(4);
console.log("使用indexOf方法查找元素索引：", index);

let includes = arr.includes(5);
console.log("使用includes方法检查元素是否存在：", includes);

// 数组遍历方法
let mappedArray = arr.map(item => item * 2);
console.log("使用map方法对数组元素执行操作：", mappedArray);

let filteredArray = arr.filter(item => item > 5);
console.log("使用filter方法过滤数组元素：", filteredArray);

let reducedValue = arr.reduce((acc, curr) => acc + curr, 0);
console.log("使用reduce方法对数组元素执行操作并返回单个值：", reducedValue);
