function stringTransform(inputString){
    const length = inputString.length;

    if (length % 15=== 0){
        const reversedString = inputString.split(``).reverse().join(``);
        const asciiTransformed = Array.from(reversedString).map(char => char.charCodeAt(0)).join(` `);
        return( asciiTransformed);
    } else if (length%3 ===0){
        return inputString.split(``).reverse().join(``);
    }else if (length%5 ===0){
        const asciiTransformed = Array.from(inputString).map(char => char.charCodeAt(0)).join(``);
        return asciiTransformed;
    }else {
        return inputString;
    }
}

console.log(stringTransform("Hamburger"));
console.log(stringTransform("Pizza"));
console.log(stringTransform("Chocolate Chip Cookie"));