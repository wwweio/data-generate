const person = {
    name: 'jack',
    age: 30,
    city:'beijing'
}


console.log(person.name);


// 定义变量存储内容
let content = '这是一个内容';

// 定义数组存储多个内容
let contents = ['内容1', '内容2', '内容3'];

// 定义对象存储键值对形式的内容
let contentObj = {
    title: '标题',
    description: '描述内容'
};

// 定义函数动态生成内容
function generateContent() {
    return '动态生成的内容';
}

// 输出内容
console.log(content);
console.log(contents);
console.log(contentObj.title);
console.log(contentObj.description);
console.log(generateContent());