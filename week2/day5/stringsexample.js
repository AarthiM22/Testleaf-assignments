//const console = require("node:console");//


let a ='aarthi';
let length = a.length;
console.log(length)

let b ='aarthy';
let len = b.length;
console.log(len)

let x ='venbba';
let y = x.length;
console.log(y);

//charAt---position
let p ='gopi';
let q = p.charAt(2);
console.log(q);

let h='testlea'
let v=h.indexOf('s');
console.log(v);

//slice --- starts counting from start index but omits end index thats 2 is r, 3 is t , 4 is h 
// ---- h not included in o/p end index 

let pp ='Aarthi';
let yy = pp.slice(2,4);
console.log(yy)


let n='daddyhi'
let m = n.slice(4,2); // here start index is taken as bigger number
console.log(m)


//indexof 

let j='roots';
let g = j.indexOf('o');
console.log(g);

let d ='puppyleaf';
let t = d.indexOf('p',1); // from position 1 it check for first p which is in position 2
console.log(t)

let l='daddyhi'
let k = l.slice(4);
console.log(k)

let f='playwright'
let c = l.slice(4, -2);
console.log(c)

