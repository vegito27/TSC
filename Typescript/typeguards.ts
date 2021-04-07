
let pet=getSmallPet()

if('swim' in pet){
	
	pet.swim()

}

if(pet.fly){

	pet.fly()
}


let fishPet=pet as Fish;

let birdPet=pet as Bird;

if(fishPet.swim){

	fishPet.swim()

}else if(birdPet.fly){

	birdPet.fly
}


function isFish(pet:Fish | Bird):pet is Fish{
	return (pet as Fish).swim!==undefined
}

if(isFish(pet)){
	pet.swim()

}else{
	pet.fly()

}

// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.











