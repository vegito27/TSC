var pet = getSmallPet();
if ('swim' in pet) {
    pet.swim();
}
if (pet.fly) {
    pet.fly();
}
var fishPet = pet;
var birdPet = pet;
if (fishPet.swim) {
    fishPet.swim();
}
else if (birdPet.fly) {
    birdPet.fly;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.
