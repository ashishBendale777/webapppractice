var stdArr = [
    {
        stdid: 1,
        stdName: "Ashish",
        stdClass: "MCA"
    },
    {
        stdid: 2,
        stdName: "Dhiraj",
        stdClass: "MSCCS"
    },
    {
        stdid: 3,
        stdName: "Pawan",
        stdClass: "MCA"
    },
]

console.log(stdArr.length)

stdArr.push({
    stdid: 4,
    stdName: "Sam",
    stdClass: "MCA"
})

stdArr.push({
    stdid: 5,
    stdName: "Amol",
    stdClass: "MSCIT"
})

stdArr.pop()
stdArr.pop()

console.log(stdArr.length)

console.table(stdArr.find((std) => std.stdid == 1))
console.log(stdArr.findIndex((std) => std.stdid == 3))