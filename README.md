# TypeScript Type Coercion Bug

This repository demonstrates a subtle bug in TypeScript where type coercion can lead to unexpected runtime errors that are not caught during compilation.

The `add` function is declared to accept two numbers and return a number. However, if a string is passed as an argument, TypeScript will not throw a compile-time error. Instead, it performs type coercion, resulting in string concatenation instead of numerical addition.

This can lead to unexpected behavior in applications and is difficult to debug without careful testing.

## Solution

The provided solution enhances type checking to prevent such errors.

## How to reproduce

1. Clone this repository.
2. Compile the code using `tsc bug.ts`.
3. Run the compiled code using `node bug.js`.