function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var key = arr[i];
      var j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // 示例
  var arr = [5, 3, 8, 4, 2];
  console.log("原始数组：" + arr);
  var sortedArr = insertionSort(arr);
  console.log("插入排序后的数组：" + sortedArr);