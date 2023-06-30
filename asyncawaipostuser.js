const users = [{
    uid: 1,
    uname: "Ashish",
    upass: "as123"
},
{
    uid: 2,
    uname: "Pawan",
    upass: "pw12"
}]

const posts = [{
    pid: 1,
    ptitle: "Post 1",
    pdesc: "Post 1 desc",
    uid: 1
}, {
    pid: 2,
    ptitle: "Post 2",
    pdesc: "Post 2 desc",
    uid: 2
},
{
    pid: 3,
    ptitle: "Post 3",
    pdesc: "Post 3 desc",
    uid: 2
}]

function doUserLogin(username, userpass) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.uname == username && user.upass == userpass)
        if (user) {
            setTimeout(() => {
                resolve(user)
            }, 2000);
        } else {
            reject(new Error("Please Enter Correct Username or password"))
        }
    })
}

function getPostByUser(userId) {
    return new Promise((resolve, reject) => {
        const postsData = posts.filter((post) => post.uid == userId)
        if (postsData.length > 0) {
            setTimeout(() => {
                resolve(postsData)
            }, 2000);
        } else {
            reject(new Error("Posts not available"))
        }
    })
}

// doUserLogin("Pawan", "pw12")
//     .then((user) => {
//         console.log(user)
//         getPostByUser(user.uid)
//             .then((posts) => console.table(posts))
//     }).catch((err) => {
//         console.log(err)
//     });

async function doTask() {
    try {
        const user = await doUserLogin('Ashish', "as123")
        console.log(user)
        const posts = await getPostByUser(user.uid)
        console.table(posts)
    } catch (error) {
        console.log(error)
    }
}

doTask()