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

            console.log(`I put ${amountEur}€ in fuel`);

            // Question : with amountEur €, what percentage of tank will be filled? How much change (if any) could be?

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

            return { "change": 0 };
        },
        "drive": ({ distanceKm }) => {

            console.log(`Driving for ${distanceKm}km`);

            // Question : After running distanceKm km, what percentage of tank will be?

            const consumedFuelLiter = distanceKm * consumptionForOneHundredKm / 100; //liter

            const volumePresentLiter = tankCapacity * car.tankFillPercentage / 100; //liter

            const newVolumeLiter = volumePresentLiter - consumedFuelLiter; //liter

            car.tankFillPercentage = newVolumeLiter * 100 / tankCapacity;


            if (newVolumeLiter <= 0) {

                car.tankFillPercentage = 0;

                const maxDistanceWithVolumePresentLiter = volumePresentLiter * 100 / consumptionForOneHundredKm //km
                
                const remainingDistance  = distanceKm - maxDistanceWithVolumePresentLiter //km

                console.log(`Warning: You have traveled ${maxDistanceWithVolumePresentLiter.toFixed(2)}km with the remaining fuel. Remaining distance is ${remainingDistance.toFixed(2)}km. Please refuel!`)

                throw new Error("Not enough fuel")
            }


        }
    };

    return car;
}