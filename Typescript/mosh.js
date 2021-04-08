"use strict";
// Superset of js
// strong and static typing
// typing is optional
// debugging is easier
// oops feature
// compile time error
// gives intellisense
// transpile into js
exports.__esModule = true;
// This will compile sucessfully but show some error because we didn't declare return type of doSomething and same with log
function log(meassage) {
    console.log(meassage);
}
log("Hello");
//  run with mosh.ts
// produces js file witj js code
// data types declarartion =>var and let
// Giving warning
function doSomething() {
    for (var i = 0; i < 10; i++)
        console.log(i);
    // i value retains its value beacause of var declaration
    console.log("Finally i is", i);
    for (var j = 0; j < 10; j++)
        console.log(j);
    // this will show error beacuse j has block scope
    // console.log("Finally j is ",j)
}
doSomething();
var a;
a = 10;
a = "Hello";
// valid
console.log(a);
var x;
var b;
var c;
var array = [1, 2, 3, 4, 5, 6];
var any = [1, "string", false, { "hrllo": false }];
// automatic get value 0,1 and so on if we dont declare/assign any value
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// type becomes fix
var message = "abc";
var endsWithC = message.endsWith('c');
// type cohesion
var endsWithC2 = message.endsWith('c');
var endsWithC3 = message.endsWith('c');
// arrow functions
var logX = function (message) {
    console.log(message);
};
//  or
var LogX = function (message) { return console.log(message); };
// Custom types
// bad way
var drawPoint = function (point) {
};
drawPoint({ x: 1, y: 2 });
var drawPoint2 = function (point) {
};
var Point = /** @class */ (function () {
    function Point() {
    }
    // implemetation is allowed
    Point.prototype.draw2 = function () {
        console.log('x is ', this.x);
        console.log('y is ', this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point1;
// this is throwing error because we didn't allocated memory to variables x and y
// point1.draw()
var point2 = new Point();
point2.draw2();
// run with command
// tsc mosh.ts && node mosh.js
// Using the Constructor
var Point2 = /** @class */ (function () {
    // implemetation is allowed
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw3 = function () {
        console.log('x is ', this.x);
        console.log('y is ', this.y);
    };
    Point2.prototype.getDistance = function (another) { };
    return Point2;
}());
var point3 = new Point2(3, 5);
point3.draw3();
// /Access modifiers
var Point3 = /** @class */ (function () {
    // Not mandatory z value means optional
    function Point3(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point3.prototype.draw4 = function () {
        console.log('x is ', this.x);
        console.log('y is ', this.y);
        console.log('z is z ', this.z);
    };
    return Point3;
}());
var point4 = new Point3(1, 2, 3);
// x and z a are not accessible only y is allowed
point4.y;
// Properties
var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.getX = function () {
        return this.x;
    };
    Point4.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
        }
        this.x = value;
    };
    return Point4;
}());
var point5 = new Point4(1, 3);
// ans is 1
point5.setX(100);
var ans = point5.getX();
console.log(ans);
