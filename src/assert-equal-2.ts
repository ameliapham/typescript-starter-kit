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


// Create circle with class Circle 
class Circle2 {
    public radius: number;
    public color: string;
    constructor(
        params:{
            initialRadius: number,
            initialColor: string
        }
    ) {
        const { initialColor, initialRadius} = params;
        this.radius= initialRadius;
        this.color = initialColor;
    }

    public getArea(){
        return Math.PI * this.radius ** 2;
    }
}

const myCircle2 = new Circle2({
    "initialColor": "blue",
    "initialRadius": 3
});

assert<Equals<typeof myCircle, Circle>>


// Using assert Equals to check equal of a class and a Type
assert<Equals<Circle, Circle2>>
