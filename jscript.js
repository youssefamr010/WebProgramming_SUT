
document.writeln("this is the js<br>");

var n = 9;

var s = "13.4pt";
s = parseInt(s);    
console.log(s); 

var f = "13.4pt";
f = parseFloat(f);
console.log(f); 

console.log("4" + 2); 
console.log(3 == "3"); 
console.log(3 === "3"); 


let t = 70;
let status = (t > 100) ? "boiling" : "not boiling";

let state; 
if (t >= 100) {
    state = "boiling";
} else {
    state = "not boiling";
}

var temp = 90;
if (temp >= 100) {
    document.writeln("boiling<br>");
} else if (temp < 100 && temp >= 60) {
    document.writeln("warm<br>");
} else {
    document.writeln("cold<br>");
}


var day = 1;
switch (day) {
    case 1:
        document.writeln("sunday<br>");
        break;
    case 2:
        document.writeln("monday<br>");
        break;
    default:
        document.writeln("not a dAY !!<br>");
}


for (var c = 2; c < 5; c++) {
    document.writeln(c + "<br>");
}

var w = 0; 
while (w < 4) {
    document.writeln(w + "<br>");
    w++;
}

do {
    document.writeln(w + "<br>");
    w++;
} while (w < 4);


function hello() {
    console.log("hello");
}
hello();

function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
console.log(add(4, 3));

var y = function() {
    console.log(" hi ");
}
y();

function callanotherfn(fn) {
    console.log("this is the function");
    fn();
}
callanotherfn(function() {
    console.log("this is anonymous function ");
});


for (let i = 0; i < 5; i++) {
    var u = 4;
    console.log(i);
}
console.log(u); 


var arr = [100, 200, 400, 500, 200, "name ", "string"];
console.log(arr);
console.log(arr[4]);

arr[0] = "youssef";
console.log(arr.length);

arr.pop();
console.log(arr);

arr.push(90, 40);
console.log(arr);

arr.splice(3, 0, 450);
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(9);
console.log(arr);

console.log(arr.indexOf(200));
console.log(arr);
console.log(arr.indexOf(900));
console.log(arr);
console.log(arr.lastIndexOf(500));
console.log(arr);

var miniarr = arr.slice(2, 5);
console.log(miniarr);

let arr3 = ["hello", "youssef", "and", "an"];
let strArr = arr3.join(" ");
console.log(strArr);

arr3.sort();
console.log(arr3);

var arr4 = [4, 5, 6];
var newarr = arr3.concat(arr4);
console.log(newarr);

let arr5 = [2, 5, 1, 7, 8];
arr5.sort((a, b) => b - a);
console.log(arr5);

arr.forEach(function(element) {
    console.log(element + 1);
});

for (var element of arr3) {
    console.log(element);
}


var obj1 = document.getElementById("id1");
if (obj1) {
    console.log(obj1);
    obj1.innerHTML = "first edit";
}

var obj2 = document.getElementsByClassName("container")[0];
if (obj2) console.log(obj2);

var obj3 = document.querySelector(".overflow");
if (obj3) {
    console.log(obj3);
    obj3.style.background = "grey";
}

var element1 = document.createElement("div");
var text = document.createTextNode("this is our text");
element1.appendChild(text); 
document.body.appendChild(element1); 


let person = {
    name: "youssef",
    major: "ai",
    age: 20,
    welcome: function() {
        console.log("welcome " + this.name);
    }
};

person.welcome();

console.log(person.name);

person.name = "Ali";
console.log(person);

person.major = "cs";
console.log(person);

delete person.age;
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let person2 = {};
Object.assign(person2, person, { job: "designer" });
console.log(person2);


function Person(name, age) { 
    this.name = name;
    this.age = age;
}

let obj = new Person("Mai", 27);
console.log(obj.name);

let personObj2 = new Person("sara", 30); 

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(this.name + " makes a sound");
}

let a = new Animal("cat");
a.speak();

function Dog(name) {
    Animal.call(this, name); 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function speak() {
    console.log(this.name + " barks"); 
}

let d = new Dog("puppy");
d.speak();



class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound");
    }
}

class dog extends animal {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    getData() {
        console.log("this type, name " + this.name + " " + this.type);
    }
}

let an = new animal("cat");
an.speak(); 
let d1 = new dog("puppy", "type"); 
d1.speak();
d1.getData();

let str = JSON.stringify(person);
console.log(str);


let obj4 = JSON.parse(str)
console.log(obj4);
