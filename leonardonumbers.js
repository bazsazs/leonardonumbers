function leonardoNumbers(n, L0, L1, add) {
    const leonardo = [L0, L1];
    
    for (let i = 2; i < n; i++) {
        leonardo.push(leonardo[i - 1] + leonardo[i - 2] + add);
    }
    
    return leonardo;
}

// Examples
console.log(leonardoNumbers(5, 1, 1, 1));  // Output: [ 1, 1, 3, 5, 9 ]
console.log(leonardoNumbers(5, 0, 0, 2));  // Output: [ 0, 0, 2, 4, 8 ]
console.log(leonardoNumbers(10, 0, 1, 4)); // Output: [ 0, 1, 5, 10, 19, 33, 56, 93, 153, 250 ]
console.log(leonardoNumbers(5, 0, 0, 0));  // Output: [ 0, 0, 0, 0, 0 ]
