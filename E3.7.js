function printNumbers(a, b) {
  console.log(a)
  let print = setInterval(() => {
    a++
    if (a > b-1){
      clearInterval(print)
    }
    console.log(a);
    }, 1000);
}

printNumbers(5, 10)