const mprom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolve")
    }, 7000);   
})

const mprom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolve")
    }, 5000);    
})

const mprom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolve")
    }, 4000);
})

const mprom4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4 Resolve")
    }, 1000);  
})


// Promise.all([mprom1,mprom2,mprom3,mprom4])
// .then((result) => {
//     console.log(result)    
// }).catch((err) => {
//     console.log(err)
// });

async function doWork(){
    let res1;
    try {
        res1=await mprom1
    } catch (error) {
        console.log(err)
    }

    
    console.log(res1)

    let res1;
    try {
        res1=await mprom1
    } catch (error) {
        console.log(err)
    }

    
}

doWork()