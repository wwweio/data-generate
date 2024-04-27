// 将字符串转换为二进制数据
const encoder = new TextEncoder();
const text = "Hello, World!";
const binaryData = encoder.encode(text);

console.log(binaryData); // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ]

// 将二进制数据转换为字符串
const decoder = new TextDecoder();
const decodedText = decoder.decode(binaryData);

console.log(decodedText); // "Hello, World!"


const binaryString = "11110011 10011011 10110110";

// 将二进制字符串转换为Uint8Array数组
const binaryArray = binaryString.split(' ').map(bin => parseInt(bin, 2));
const binaryData1 = new Uint8Array(binaryArray);

// 使用TextDecoder对象将二进制数据解码为字符串
const decoder1 = new TextDecoder();
const decodedText1 = decoder1.decode(binaryData1);

console.log(decodedText1); 