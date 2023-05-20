//java script objects

var person = {
    pName: "Ashish",
    age: 30,
    city: "BSL",
    isAdult: function () {
        return this.age > 18
    }

}
person.state = "MH"

person.age = 31

console.log(person.pName)
console.log(person.age)
console.log(person.state)
console.log(person.isAdult())

const perData = [
    {
        pName: "Ashish",
        age: 32,
        city: "BSL",
        isAdult: function () {
            return this.age > 18
        }
    },
    {
        pName: "Ashish",
        age: 25,
        city: "BSL",
        isAdult: function () {
            return this.age > 18
        }
    },
    {
        pName: "Ashish",
        age: 16,
        city: "BSL",
        isAdult: function () {
            return this.age > 18
        }
    },
    {
        pName: "Ashish",
        age: 18,
        city: "BSL",
        isAdult: function () {
            return this.age > 18
        }
    }]

var filterdData = perData.filter((person) => person.age > 18)
console.table(filterdData)