let a = null;
let b = 45
let c = true
let d = BigInt("567")
let e = "Niranjan"
let f = Symbol("yo symbol")
let g = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

const item = {
    "apple" : 1,
    "banana" : null,
    "mango" : 3
}

console.log(item["apple"])
console.log(item["banana"])
console.log(item["mango"])
console.log(item["papaya"])


/*
null
45
true
567n
Niranjan
Symbol(yo symbol)
undefined
object
number
boolean
bigint
string
symbol
undefined
1
null
3
undefined
*/
