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
        "tankFillPercentage": 0, // %
        "putGaz": ({ amountEur }) => {

            console.log(`We put ${amountEur}€ in Fuel`);

            // Question : with amountEur €, what percentage of tanks will be full?

            // dieselPrice : 1.4€/l
            // amountEur : 50€
            // tankFillPercentage : 0%
            // tankCapacity : 60 litre

            const volumeAddedLiter = amountEur / dieselPricePerLiter; // 50/1.4 = 35.7 liter

            const volumePresentLiter = tankCapacity * car.tankFillPercentage / 100; // 60 * 0 / 100 = 0 liter

            const newVolumeLiter = volumePresentLiter + volumeAddedLiter; // 35.7 liter 

            car.tankFillPercentage = newVolumeLiter * 100 / tankCapacity; // 35.7 * 100 / 60 = 59.5%

            // Case surplus
            const surplusLiter = newVolumeLiter - tankCapacity; //liter

            we_put_too_much_case: {
                if (surplusLiter <= 0) {
                    break we_put_too_much_case;
                }

                car.tankFillPercentage = 100; //%

                const change = dieselPricePerLiter * surplusLiter; // eur

                return { change };

            }

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