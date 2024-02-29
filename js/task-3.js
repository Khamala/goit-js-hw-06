
class StringBuilder {
    #value = '';

    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value;
    }
    padEnd(str){
        this.#value = this.#value + str;
    }
    padStart(str) {
        this.#value = str + this.#value;
    }
    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}   

const builder = new StringBuilder(".");

console.log(builder);

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

//У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт
// Об'єкт builder не містить публічну властивість value