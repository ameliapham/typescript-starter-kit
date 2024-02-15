import { createPeugeot208 } from "./createPeugeot208";
import { calculateAdjustedAmount } from "./calculateAdjustedAmount"
// import {bankAccount} from "./bankAccount"

const myCar = createPeugeot208({
    "color": "pink"
})

let currentBankBalance = 500

console.log(`My car ${myCar.brand} ${myCar.color} is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);


(() => {
    try {

        myCar.drive({
            "distanceKm": 220
        });

    } catch (error) {

        const adjustmentResult = calculateAdjustedAmount({
            currentBankBalance,
            "desiredAmount" : 30
        })
        myCar.putGaz({
            "amountEur": adjustmentResult.adjustedAmount
        });

        currentBankBalance = adjustmentResult.newBankBalance

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

        console.log(`My current bank balance is ${adjustmentResult.newBankBalance}€`);

        console.log("Fin of code")
        process.exit(0);
    };

    try {

        myCar.drive({
            "distanceKm": 120
        });

    } catch (error) {

        const adjustmentResult = calculateAdjustedAmount({
            currentBankBalance,
            "desiredAmount" : 70
        })
        myCar.putGaz({
            "amountEur": adjustmentResult.adjustedAmount
        });

        currentBankBalance = adjustmentResult.newBankBalance

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

        console.log(`My current bank balance is ${adjustmentResult.newBankBalance}€`);

        console.log("Fin of code")
    };

    try {

        myCar.drive({
            "distanceKm": 400
        });

    } catch (error) {

        const adjustmentResult = calculateAdjustedAmount({
            currentBankBalance,
            "desiredAmount" : 400
        })
        myCar.putGaz({
            "amountEur": adjustmentResult.adjustedAmount
        });

        currentBankBalance = adjustmentResult.newBankBalance

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

        console.log(`My current bank balance is ${adjustmentResult.newBankBalance}€`);

        console.log("Fin of code 3")
    };

    try {

        myCar.drive({
            "distanceKm": 400
        });

    } catch (error) {

        const adjustmentResult = calculateAdjustedAmount({
            currentBankBalance,
            "desiredAmount" : 30
        })
        myCar.putGaz({
            "amountEur": adjustmentResult.adjustedAmount
        });

        currentBankBalance = adjustmentResult.newBankBalance

        console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

        console.log(`My current bank balance is ${adjustmentResult.newBankBalance}€`);

        console.log("Fin of code 4")
    };

})()

