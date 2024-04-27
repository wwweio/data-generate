function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const left = [];
      const right = [];
      
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
      
      return quickSort(left).concat(pivot, quickSort(right));
    }
  }
  
  // 示例
  let arr = [64, 34, 25, 12, 22, 11, 90];
  console.log("排序前:", arr);
  console.log("排序后:", quickSort(arr));