//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let isFavorite = function (dict) {
    //parses through
    for (const [key, val] of Object.entries(dict)) {
        //displays dishes as shown
        console.log(key + ': ' + JSON.stringify(val))
    }
}

//calls it
isFavorite(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.age = age;
    this.name = name;

    // printInfo method: arrow function 
    this.printInfo = () => {
        console.log(`Name: ${this.name} \n Age: ${this.age}`);
    }

    // addAge method: increments age by 1 each time the method is called
    this.addAge = () => {
        this.age += 1;
        console.log(`Name: ${this.name} \n Age: ${this.age}`);
    }
}

// Creating an instance of person
let this_person = new Person('Onxy', 23)

// Creating 2nd instance of person
let that_person = new Person('Fern', 32)

// print person 1 info
this_person.printInfo()
// print person 2 info
that_person.printInfo()

// incremement person 1 age by 3 years 
this_person.addAge()
this_person.addAge()
this_person.addAge()


// =============Exercise #3 ============//
/*
Create a Promised based function that will check a string to determine if it's 
length is greater than 10. If the length is greater than ten, console log 
"Big word". If the length of the string is less than 10, console log "Small Number"
*/

function isTenPromise(){
    return new Promise((resolve, reject) => {
        if(str.length > 10) { resolve(true) } 
        else { reject(false) }
    })
}

str = "Life, the universe and everything."

isTenPromise(str)
.then( () => { console.log("Big word")})
.catch( () => { console.log("Small Number")})