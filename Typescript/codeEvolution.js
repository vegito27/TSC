"use strict";
// Open source programming language
// Typed superset of javascript
// complies down to plain javascript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello world";
console.log(message);
// run command "tsc codeEvolution --watch" to debug
// Variable declarations
// No block-scoped
var x = 10;
var y = 20;
// cannot declare x=20
var sum;
var title = 'codeEvolution';
var isBeginner = true;
var total = 0;
// Cannot reassign variable again of another type
// total="100"
var name = "rishabh";
var sentence = "My name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// array of number
var list1 = [1, 2, 5, 3];
var list2 = [1, 2, 3, 4, 5];
// tuple types
var tuple = ['Rishabh', 27];
// In tuple, elements can be pushed but cannot replace the position with different type
/*Size of tuple is fixed*/
// Enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// Any value can be assigned to enums
var c = Color.Green;
console.log(c);
// Any type
var random = 10;
random = true;
random = "rishabh";
console.log(random);
var myVariable = 10;
// These will not throw any error
console.log(myVariable.name);
// myVariable()
// myVariable.toUpperCase()
var myVariable2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
// These will throw  errors
/*console.log(myVariable2.name)
myVariable2()
myVariable2.toUpperCase()
*/
// This willot throw an error
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
// assertion
// (myVariable2 as string).toUpperCase()
// Type inference
var a;
// here , a is not declared with any type
a = 10;
a = true;
var b = 10;
// cannot be reassign because b has alredy declared a type number
// b=true
var multiType;
multiType = 10;
multiType = false;
// any type has no restrictions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// cannot do
// add('10',4)
// Optional type (Question mark)
// ? will trewat as undefined
function add2(num1, num2, num3) {
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
// Both valid
add2(10, 10);
add2(10, 10, 10);
// Note:Optional parameter must always at the last  or after required parameter
// Default parameter
function add3(num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
// Both valid
add2(10, 10);
function FullName(person) {
    console.log(person.firsname + " " + person.lastname);
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
function FullNameModified(person) {
    console.log(person.firstName + " " + person.lastName);
}
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('rishabh');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Managing delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Private members cannot be accessed in derived class
// protected  members can be accessed in derived class 
