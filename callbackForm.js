//step 1 fiiForm
//step 2 makePay
//step 3 generateReceipt

const studs = []

function fillForm(std, goToPay) {
    studs.push(std)
    console.log("Form Filled")
    setTimeout(() => {
        goToPay(std)
    }, 2000);

}

function makePay(std, goToReceipt) {
    console.log(`Payment done by ${std.name} of Rs ${std.fees}`)
    setTimeout(() => {
        goToReceipt(std)
    }, 6000);

}

function generateReceipt(std) {
    console.log(`Receipt generated of ${std.name} of Rs ${std.fees}`)
}

const std1 = {
    name: "AShish",
    fees: 26300,
    course: "MCA"
}

fillForm(std1, (newStd) => {
    makePay(newStd, (std) => {
        generateReceipt(std)
    })
})


const std2 = {
    name: "Pawan",
    fees: 22300,
    course: "MCA"
}

fillForm(std2, (newStd) => {
    makePay(newStd, (std) => {
        generateReceipt(std)
    })
})