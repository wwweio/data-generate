// 创建字符串
let str1 = "Hello, World!"; // 使用双引号创建字符串
let str2 = 'JavaScript'; // 使用单引号创建字符串
let str3 = `This is a template literal`; // 使用模板字符串创建字符串

// 字符串长度
console.log("Length of str1:", str1.length); // 输出字符串str1的长度

// 访问字符串中的字符
console.log("First character of str2:", str2[0]); // 输出字符串str2中的第一个字符

// 字符串连接
let concatenatedStr = str1 + " " + str2; // 使用加号连接字符串
console.log("Concatenated string:", concatenatedStr);

// 使用模板字符串连接
let templateStr = `${str1} - ${str2}`; // 使用模板字符串连接字符串
console.log("Template string:", templateStr);

// 查找子字符串
let index = str1.indexOf("World"); // 查找子字符串在字符串中的位置
console.log("Index of 'World' in str1:", index);

// 提取子字符串
let subStr = str1.slice(7, 12); // 提取从索引7到索引12之间的子字符串
console.log("Substring:", subStr);

// 替换子字符串
let replacedStr = str1.replace("World", "JavaScript"); // 替换字符串中的子字符串
console.log("Replaced string:", replacedStr);

// 转换为大写和小写
console.log("Uppercase str1:", str1.toUpperCase()); // 将字符串转换为大写
console.log("Lowercase str2:", str2.toLowerCase()); // 将字符串转换为小写

// 拆分字符串
let splitStr = str1.split(","); // 将字符串拆分为子字符串数组
console.log("Split string:", splitStr);

// 去除字符串两端的空白字符
let trimmedStr = "   JavaScript   ";
console.log("Trimmed string:", trimmedStr.trim()); // 去除字符串两端的空白字符

// 检查字符串起始和结尾
console.log("str1 starts with 'Hello':", str1.startsWith("Hello")); // 检查字符串是否以指定的子字符串开头
console.log("str2 ends with 'Script':", str2.endsWith("Script")); // 检查字符串是否以指定的子字符串结尾
