// function sum(a, b) {
//     console.log("Sum ", a + b)
// }

// function div(a, b) {
//     console.log("div ", a / b)
// }

// function mul(a, b) {
//     console.log("Mul ", a * b)
// }

// function myOps(n1, n2, call) {
//     call(n1, n2)
// }

// myOps(2, 55, mul)


const users = [
    {
        uid: 1,
        uname: "Ashish",
        roles: ["admin", "operator"]
    },
    {

        uid: 2,
        uname: "Dhiraj",
        roles: ["admin"]

    },
    {
        uid: 3,
        uname: "Pawan",
        roles: ["customer"]
    }
]

function getUser(Id, callback) {
    const user = users.find((u) => u.uid == Id)
    callback(user)
}

function getRoles(usr) {
    console.log(usr.roles)
}

getUser(1,getRoles)