import { assert, Equals } from "tsafe";

// Using assert Equals to check equal of a class and a Type

// Create circle with type Circle 
type Circle = {
    radius: number;
    color: string;
    getArea: ()=> number;
};

function createCircle(
    params: {
        initialRadius: number;
        initialColor: string;
    }
): Circle {

    const { initialColor, initialRadius } = params;

    const circle: Circle = {
        "radius": initialRadius,
        "color": initialColor,
        "getArea": ()=> Math.PI * circle.radius ** 2
    };

    return circle;

}

const myCircle = createCircle({
    "initialColor": "blue",
    "initialRadius": 3
});

assert<Equals<typeof myCircle, Circle>>


