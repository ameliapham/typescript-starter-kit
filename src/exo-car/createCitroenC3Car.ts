import { Car } from "./Car"

const tankCapacity = 60; //liter
const dieselPricePerLiter = 1.4; //eur
const consumptionForOneHundredKm = 30; //liter

export function createCitroenC3Car(
    params: {
        color: string;
    }
): Car {
    const { color } = params;
    const car: Car = {
        color,
        "brand": "Citroen",
        "tankFillPercentage": 0,
        "putGaz": ({ amountEur }) => {
            console.log(`We put ${amountEur}€ in Fuel`);

            return { "change": 0 }
        },
        "drive": ({ distanceKm }) => {
            console.log(`Driving for ${distanceKm}km`)
        }
    };
    return car;
}

const myCar = createCitroenC3Car({
    "color": "pink"
})