function show() {
    console.log("Showing...")
}

//setTimeout(show,5000)

const mIbter = setInterval(show, 3000);

setTimeout(() => {
    clearInterval(mIbter)
}, 8000)