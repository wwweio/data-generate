function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// 示例
var arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr)); // 输出 [11, 12, 22, 25, 34, 64, 90]