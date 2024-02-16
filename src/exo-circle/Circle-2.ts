
export type Circle = {
    radius: number;
    color: string;
    getArea: () => number
}

type ParamsOfCreateCircle = {
    initialRadius: number;
    initialColor: string;
}

export function createCircle(params: ParamsOfCreateCircle): Circle {
    
    const circle: Circle = {
        "radius": params.initialRadius,
        "color" : params.initialColor,
        "getArea": () => {
            const radius = circle.radius
            const areaCircle = Math.PI * radius ** 2;
            return areaCircle;
        }
    }

    return circle

}



// Create a third circle

const myCircle3 = createCircle({
    "initialRadius" : 8, 
    "initialColor": "pink"
});

console.log(myCircle3.radius)
console.log(myCircle3.getArea())

myCircle3.radius = 88

console.log(myCircle3.radius)
