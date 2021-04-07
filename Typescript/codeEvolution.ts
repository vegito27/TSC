
// Open source programming language
// Typed superset of javascript
// complies down to plain javascript

// Benefits
// 1.Less errors in code
// 2.optional statis=c typing and type inference
// 3.IDE support
// 4.Rapid growth and use
// Static type checking

export {}

let message="Hello world"

console.log(message)

// run command "tsc codeEvolution --watch" to debug

// Variable declarations

// No block-scoped

let x=10
const y=20

// cannot declare x=20

let sum;
let title='codeEvolution';

let isBeginner:boolean=true
let total:number=0

// Cannot reassign variable again of another type
// total="100"

let name:string="rishabh"

let sentence:string=`My name is ${name}`

console.log(sentence)



let n:null=null
let u:undefined=undefined

let isNew:boolean=null
let myName:string=undefined

// array of number

let list1:number[]=[1,2,5,3]

let list2:Array<number>=[1,2,3,4,5]

// tuple types

let tuple:[string,number]=['Rishabh',27]


// In tuple, elements can be pushed but cannot replace the position with different type
/*Size of tuple is fixed*/

// Enum type

enum Color {Red, Green, Blue};

// Any value can be assigned to enums

let c:Color=Color.Green

console.log(c)


// Any type

let random:any=10;
random=true
random="rishabh"

console.log(random)


let myVariable:any=10
// These will not throw any error
console.log(myVariable.name)
// myVariable()
// myVariable.toUpperCase()




let myVariable2:unknown=10

function hasName(obj:any):obj is {name:string}{

	return !!obj && typeof obj==="object" && "name" in obj
}

// These will throw  errors

/*console.log(myVariable2.name)
myVariable2()
myVariable2.toUpperCase()
*/

// This willot throw an error


if(hasName(myVariable2)){
	console.log(myVariable2.name)
}
// assertion
// (myVariable2 as string).toUpperCase()



// Type inference

let a;
// here , a is not declared with any type
a=10
a=true


let b=10
// cannot be reassign because b has alredy declared a type number
// b=true



let multiType:number|boolean;

multiType=10;
multiType=false

// any type has no restrictions


function add(num1:number,num2:number):number{
	return num1+num2
}

add(5,10)

// cannot do
// add('10',4)



// Optional type (Question mark)

// ? will trewat as undefined

function add2(num1:number,num2:number,num3?:number):number{

	if(num3)
		return num1+num2+num3
	 
	else
		return num1+num2
	
}

// Both valid
add2(10,10)
add2(10,10,10)

// Note:Optional parameter must always at the last  or after required parameter



// Default parameter

function add3(num1:number,num2:number,num3:number=10):number{

	if(num3)
		return num1+num2+num3
	 
	else
		return num1+num2
	
}

// Both valid
add2(10,10)



function FullName(person:{firsname:string,lastname:string}){

	console.log(`${person.firsname} ${person.lastname}`)
}

let p={

	firstName:"Bruce",
	lastName:"Wayne",
	// Name?:"METO"  //optional object member canot be declared
};


// Use interface as a type

interface Person{

	firstName:string;
	lastName:string;
}



function FullNameModified(person:Person){

	console.log(`${person.firstName} ${person.lastName}`)
}



class Employee{

	// private employeeName:string;
	public employeeName:string

	constructor(name:string){

		this.employeeName=name
	}


	greet():void{
	
		console.log(`Good Morning ${this.employeeName }`)
	}
}

let emp1=new Employee('rishabh')

console.log(emp1.employeeName)

emp1.greet()


class Manager extends Employee{

	constructor(managerName:string){
		super(managerName)
	}

	delegateWork(){
		console.log('Managing delegating tasks')
	}
}


let m1=new Manager('Bruce')

m1.delegateWork()
m1.greet()

console.log(m1.employeeName) 




// Private members cannot be accessed in derived class

// protected  members can be accessed in derived class 


























