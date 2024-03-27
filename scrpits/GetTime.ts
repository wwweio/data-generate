async function main() {
    const now = new Date(); // 创建一个当前日期时间的Date对象
    const year = now.getFullYear(); // 获取年份
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 获取月份，月份从0开始，所以需要加1，然后格式化为两位数
    const day = now.getDate().toString().padStart(2, '0'); // 获取日期，然后格式化为两位数

    // 将年月日拼接成指定格式的字符串
    return `${year}年${month}月${day}日`;
}