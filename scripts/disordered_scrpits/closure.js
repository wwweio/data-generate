function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    return increment;
  }
  
  const counter = createCounter();
  
  counter(); // 输出 1
  counter(); // 输出 2
  counter(); // 输出 3
  