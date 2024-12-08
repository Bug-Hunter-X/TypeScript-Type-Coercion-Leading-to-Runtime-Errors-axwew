function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

//let result = add(10, "20"); //Throws error at runtime
let result = add(10,20);
console.log(result); //Prints 30