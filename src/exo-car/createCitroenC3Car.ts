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

            const volumeAddedLiter = amountEur / dieselPricePerLiter; //liter

            const volumePresentLiter = tankCapacity * car.tankFillPercentage / 100; //liter

            const newVolumeLiter = volumePresentLiter + volumeAddedLiter; //liter 

            car.tankFillPercentage = newVolumeLiter * 100 / tankCapacity; //%

            // Case surplus
            const surplusLiter = newVolumeLiter - tankCapacity; //liter

            we_put_too_much_case: {
                if (surplusLiter <= 0) {
                    break we_put_too_much_case;
                }

                car.tankFillPercentage = 100; //%

                const change = dieselPricePerLiter * surplusLiter; //eur

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