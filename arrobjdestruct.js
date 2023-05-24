//array and objects desructuring

var nums = [55, 21, 77, 66, 66]
console.log(nums[2])
var [el1, el2, el3, el4, el5] = nums

var [el1, ...restEle] = nums
console.log(restEle)

const person = {
    name: "Ashish",
    age: 30,
    city: "BSL",
    isAdult: true
}

const { name, age, isAdult } = person
const p2 = { ...person, degre: "MCA" }
console.log(name)
console.log(age)
console.table(p2);