const myObject = {
    firstName: "Isha",
    lastName: "Bharti",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());
console.log(myObject.firstName);
console.log("******************************************")
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Annu ",
    lastName: "Bharti"
}
const person2 = {
    firstName: "Isha ",
    lastName: "Saha"
}

console.log(person.fullName.call(person1))
console.log(person2.lastName)