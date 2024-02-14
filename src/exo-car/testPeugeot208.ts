import { createPeugeot208 } from "./createPeugeot208";
import { calculateAdjustedAmount } from "./calculateAdjustedAmount"
import {bankAccount} from "./bankAccount"

const myCar = createPeugeot208({
    "color": "pink"
})

console.log(`My car ${myCar.brand} ${myCar.color} is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

try {

    myCar.drive({
        "distanceKm": 220
    });

} catch (error) {

    // console.log("attention on a eu une error", (error as any).message);

    myCar.putGaz({
        "amountEur": calculateAdjustedAmount({
            "desiredAmount": 40
        })
    });

    console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

    console.log(`My current bank balance is ${bankAccount.currentBankBalance}€`);
};

