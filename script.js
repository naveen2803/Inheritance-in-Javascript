var dog = new Dog("Woffy", "Woff");
console.log(dog.getName() + " says " + dog.whatSays());

var cat = new Cat("Catty", "Meow");
console.log(cat.getName() + " says " + cat.whatSays());

console.log(Dog.staticVar);
console.log(Cat.staticVar);
