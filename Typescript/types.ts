let isDone: boolean = false;
console.log(isDone)

// Array type

let list:number[]=[1,2,3,4,5,6]

let list2:Array<number>=[1,2,3]

console.log(list)



// Partial types

interface ToDo{
	title:string;
	description:string;

}

function updateTodo(todo:ToDo,fieldsToUpdate:Partial<ToDo>){

	return {...todo,...fieldsToUpdate}

}

const todo1={

	title:'organise desk',
	description:"clear cutter",

};


const todo2=updateTodo(todo1,{

	description:"throw out trash",

})


// Required type

interface Props{
	a?:number;
	b?:string;

}


const obj:Props={a:5};

const obj2:Required<Props>={a:5,b:"hello"}





// Read only types


interface Todo{
	title:string;
}


const todo:Readonly<Todo>={
	title:"Delete inactive users",
};


// this will not assign the title a new value and throw an error;

// todo.title="Hello";


// Freeze

function freeze<Type>(obj:Type):Readonly<Type>;



// Record <key,type>


interface CatInfo{
	age:number;
	breed:string;
}


type CatName="miffy"|"boris"|"modred";

const cats:Record<CatName,CatInfo> ={

	miffy:{age:10,breed:"Person"},
	boris:{age:5,breed:"Marie Coon"},
	modred:{age:16,breed:"british shorthair"}

};


cats.boris


// Pick<Type,Keys>

interface Todo{
	title:string;
	description:string;
	completed:boolean;
}

type TodoPreview=Pick<Todo,"title"|"completed">;

const todo:TodoPreview={

	title:"Clean room",
	completed:false,
};

todo;











