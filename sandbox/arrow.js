const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num)
    }
};

console.log(multiplier.multiply());