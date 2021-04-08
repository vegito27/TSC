// Superset of js
// strong and static typing
// typing is optional
// debugging is easier
// oops feature
// compile time error
// gives intellisense
// transpile into js

// This will compile sucessfully but show some error because we didn't declare return type of doSomething and same with log

function log(meassage) {
    console.log(meassage)
}

log("Hello")

//  run with mosh.ts
// produces js file witj js code

// data types declarartion =>var and let

// Giving warning
function doSomething(): void {

    for (var i: number = 0; i < 10; i++)console.log(i)

    // i value retains its value beacause of var declaration

    console.log("Finally i is", i)


    for (let j: number = 0; j < 10; j++) console.log(j)

    // this will show error beacuse j has block scope

    // console.log("Finally j is ",j)

}

doSomething()

let a;
a = 10
a = "Hello";

// valid
console.log(a)


let x: number;
let b: string;
let c: boolean;
let array: number[] = [1, 2, 3, 4, 5, 6];
let any: any[] = [1, "string", false, { "hrllo": false }]

// automatic get value 0,1 and so on if we dont declare/assign any value

enum Color { Red = 1, Green = 2, Blue = 3 }

// type becomes fix
let message = "abc";

let endsWithC = message.endsWith('c')

// type cohesion
let endsWithC2 = (<string>message).endsWith('c')

let endsWithC3 = (message as string).endsWith('c')

// arrow functions

let logX = function (message) {
    console.log(message)
}
//  or

let LogX = message => console.log(message)


// Custom types

// bad way
let drawPoint = (point: { x: number, y: number }) => {

}

drawPoint({ x: 1, y: 2 });

// Class =>group variables and functiona are highly related

// Good way=>use iterfaces

// they dont have any implementation/function only patameters 
interface Point {
    x: number,
    y: number,
    // only signature is allowed
    draw: () => void
}

let drawPoint2 = (point: Point) => {
}


class Point {

    x: number;
    y: number;
    // implemetation is allowed
    draw2() {
        console.log('x is ', this.x);
        console.log('y is ', this.y)
    }

    getDistance(another: Point) {
    }

}


let point1: Point;
// this is throwing error because we didn't allocated memory to variables x and y
// point1.draw()


let point2: Point = new Point();
point2.draw2()


// run with command
// tsc mosh.ts && node mosh.js


// Using the Constructor
class Point2 {

    x: number;
    y: number;
    // implemetation is allowed


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw3() {
        console.log('x is ', this.x);
        console.log('y is ', this.y)
    }

    getDistance(another: Point) { }
}

let point3 = new Point2(3, 5);
point3.draw3()


// /Access modifiers

class Point3 {

    private x: number;
    public y: number;
    protected z: number;

    // Not mandatory z value means optional
    constructor(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    draw4() {
        console.log('x is ', this.x);
        console.log('y is ', this.y)
        console.log('z is z ', this.z)
    }

}

let point4 = new Point3(1, 2, 3)

// x and z a are not accessible only y is allowed

point4.y


// Properties

class Point4 {


    constructor(private x?: number, private y?: number) {
    }

    getX() {
        return this.x
    }

    setX(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0')
        }
        this.x = value
    }

}

let point5 = new Point4(1, 3);
// ans is 1

point5.setX(100)
let ans = point5.getX()

console.log(ans)


// Getters and Setters
// we have get and set keyword in ts


class Point5 {


    constructor(private x?: number, private y?: number) {
    }

    get X() {
        return this.x
    }

    set X(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0')
        }
        this.x = value
    }

}

let point6 = new Point5(1, 3);
// ans is 1

console.log(point6.X)

// Every file is module in ts we need to export our function/variable so that other module can access/import the content of other file 

