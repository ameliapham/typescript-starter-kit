import { createCitroenC3Car } from "./createCitroenC3Car"

const myCar = createCitroenC3Car({
    "color": "pink"
})

console.log(`My car ${myCar.brand} ${myCar.color} is filled at ${myCar.tankFillPercentage.toFixed(2)}%`)

const { change } = myCar.putGaz({
    "amountEur": 60
})

console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%, I got ${change.toFixed(2)}€ in change`);

/*myCar.drive({
    "distanceKm": 160
})

console.log(`My car is filled at ${myCar.tankFillPercentage.toFixed(2)}%`)*/

try {

    myCar.drive({
        "distanceKm": 220
    });

} catch (error) {

    // console.log("attention on a eu une error", (error as any).message);

    myCar.putGaz({
        "amountEur": 10
    });

    console.log(`My car's tank is filled at ${myCar.tankFillPercentage.toFixed(2)}%`);

}