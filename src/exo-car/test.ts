import { createCitroenC3Car } from "./createCitroenC3Car";
import { calculateAdjustedAmount } from "./calculateAdjustedAmount"
import {bankAccount} from "./bankAccount"

const myCar = createCitroenC3Car({
    "color": "pink"
})

console.log(`My car ${myCar.brand} ${myCar.color} is filled at ${myCar.tankFillPercentage.toFixed(2)}%`)

const { change } = myCar.putGaz({
    "amountEur": calculateAdjustedAmount({
        "desiredAmount": 40
    })
})

console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%, I got ${change.toFixed(2)}€ in change`);

console.log(`My current bank balance is ${bankAccount.currentBankBalance}€`)

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

    console.log(`My current bank balance is ${bankAccount.currentBankBalance}€`)
};

