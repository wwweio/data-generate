// 获取当前时间戳
const currentTimestamp = Date.now();
console.log("当前时间戳：" + currentTimestamp);

// 创建一个表示当前日期和时间的对象
const currentDate = new Date();
console.log("当前日期和时间：" + currentDate);

// 获取年份
const currentYear = currentDate.getFullYear();
console.log("当前年份：" + currentYear);

// 获取月份（注意：月份从0开始）
const currentMonth = currentDate.getMonth();
console.log("当前月份：" + currentMonth);

// 获取日期
const currentDay = currentDate.getDate();
console.log("当前日期：" + currentDay);

// 获取小时
const currentHour = currentDate.getHours();
console.log("当前小时：" + currentHour);

// 获取分钟
const currentMinute = currentDate.getMinutes();
console.log("当前分钟：" + currentMinute);

// 获取秒
const currentSecond = currentDate.getSeconds();
console.log("当前秒：" + currentSecond);

// 获取星期几（0表示星期日，1表示星期一，以此类推）
const currentDayOfWeek = currentDate.getDay();
console.log("今天是星期" + currentDayOfWeek);
