const nums = [565, 25, 85, 55, 33]
const mProm = new Promise((resolve, reject) => {
    let no = nums.find((n) => n == 33)
    if (no != null) {
        setTimeout(() => { resolve(no) }, 5000)
    } else {
        reject(new Error("Not FOund"))
    }
})

mProm.then((data) => console.log("Data", data))
    .catch((err) => console.log(err))
    .finally(() => console.log("Settled"))