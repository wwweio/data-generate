import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const directoryPath = path.join(__dirname, '../practice');
const outputPath = path.join(__dirname, '../public', 'directories.json');

function getDirectories(dirPath) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    // const directories = files.filter(file => file.isDirectory()).map(dir => dir.name);
    // return directories;
    const directories = files.filter(file => file.isDirectory()).map(dir => {
        const num = parseInt(dir.name.match(/\d+/)[0], 10); // 提取目录名称中的数字部分并转换为数字
        return { name: dir.name, num };
    });
    const sortedDirectories = directories.sort((a, b) => a.num - b.num); // 按照数字大小正序排序
    return sortedDirectories.map(dir => dir.name);
}

// const allDirectories = getDirectories(directoryPath);
// fs.writeFileSync(outputPath, JSON.stringify(allDirectories), 'utf-8');
const allDirectories = getDirectories(directoryPath);
const formattedDirectories = JSON.stringify(allDirectories, null, 2); // 格式化JSON，缩进为2个空格

fs.writeFileSync(outputPath, formattedDirectories, 'utf-8');
