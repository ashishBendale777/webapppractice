const BankSystem = {
    Accounts: [],

    addAccount: function (acc) {
        this.Accounts.push(acc)
    },

    withdraw: function (accNo) {
        var filterdata = BankSystem.filter((Accounts => ac))

    },
    deposite: function (accNo, amount) {
        const accData = this.Accounts.find((acc) => acc.AccNo == accNo)
        accData.AccBalance += amount
    },

    chekBalance: function (accNo) {
        const accData = this.Accounts.find((acc) => acc.AccNo == accNo)
        console.log(accData.AccBalance)
    },

    delfunction: function (accno) {
        this.Accounts = this.Accounts.filter((Account) => Account.AccNo != accno)
    }
}


BankSystem.addAccount({
    AccNo: 1,
    AccName: "AShish",
    AccBalance: 500
})

BankSystem.addAccount({
    AccNo: 2,
    AccName: "Pawan",
    AccBalance: 600
})
BankSystem.addAccount({
    AccNo: 3,
    AccName: "Pawan",
    AccBalance: 600
})


console.table(BankSystem.Accounts);
BankSystem.chekBalance(1)
BankSystem.deposite(1, 6600)
BankSystem.chekBalance(1)
BankSystem.delfunction(2)
console.table(BankSystem.Accounts)

