// 4.3 Coding Challenge 2: String Transformation :


    function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // Divisible by 15: reverse and then replace each character with its ASCII code
        let reversedString = input.split('').reverse().join('');
        let asciiTransformed = reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
        return asciiTransformed;
    } else if (length % 5 === 0) {
        // Divisible by 5: replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Divisible by 3: reverse the string
        return input.split('').reverse().join('');
    } else {
        // No transformation
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"