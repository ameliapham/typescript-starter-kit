import { createBMW650i } from "./createBMW650i";
import {createBankAccount} from "./BankAccount"

const myAccount = createBankAccount({
    "initialBalance" : 2000
})

console.log(`My balance is ${myAccount.balance}`)

const myCar = createBMW650i({
    "color": "pink"
})


console.log(`My car ${myCar.brand} ${myCar.color} is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);


(() => {
    try {

        myCar.drive({
            "distanceKm": 220
        });

    } catch (error) {

        const { change } = myCar.putGaz({
            "amountEur": myAccount.withdrawAmount({
                desiredAmount: 400
            }).spendingAmount
        });

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%, I got ${change.toFixed(2)}€ in change`);

        myAccount.balance += change

        console.log(`My current bank balance is ${myAccount.balance}€`);

    };

    try {

        myCar.drive({
            "distanceKm": 120
        });
        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);


    } catch (error) {

        const { change } = myCar.putGaz({
            "amountEur": myAccount.withdrawAmount({
                desiredAmount: 50
            }).spendingAmount
        });

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%, I got ${change.toFixed(2)}€ in change`);

        myAccount.balance += change

        console.log(`My current bank balance is ${myAccount.balance}€`);

    };

    try {

        myCar.drive({
            "distanceKm": 180
        });

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

    } catch (error) {

        const { change } = myCar.putGaz({
            "amountEur": myAccount.withdrawAmount({
                desiredAmount: 30
            }).spendingAmount
        });

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%, I got ${change.toFixed(2)}€ in change`);

        myAccount.balance += change

        console.log(`My current bank balance is ${myAccount.balance}€`);

    };

})()
