function* numbergenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = numbergenerator();
console.log("generator example")
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().done)