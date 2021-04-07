var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var isDone = false;
console.log(isDone);
// Array type
var list = [1, 2, 3, 4, 5, 6];
var list2 = [1, 2, 3];
console.log(list);
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: 'organise desk',
    description: "clear cutter"
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash"
});
var obj = { a: 5 };
var obj2 = { a: 5, b: "hello" };
var todo = {
    title: "Delete inactive users"
};
var cats = {
    miffy: { age: 10, breed: "Person" },
    boris: { age: 5, breed: "Marie Coon" },
    modred: { age: 16, breed: "british shorthair" }
};
cats.boris;
var todo = {
    title: "Clean room",
    completed: false
};
todo;
