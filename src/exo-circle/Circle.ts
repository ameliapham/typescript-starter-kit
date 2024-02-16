// Write a type that describe a circle, a circle have two properties: radius and "getArea", a function that returns the area of  the circle

export type Circle = {
    radius: number;
    getArea: () => number
}

// Create an object of type circle 

const myCircle: Circle = {
    "radius": 20,
    "getArea": () => {
        const radius = myCircle.radius
        const areaCircle = Math.PI * radius ** 2;
        return areaCircle;
    }
}

// log in the console the area of the declared circle

const area = myCircle.getArea();
console.log(`Here the area of my circle : ${area}`)


// Create another object of type circle: myCircle2

const myCircle2: Circle = {
    "radius": 50,
    "getArea": () => {
        const radius = myCircle.radius
        const areaCircle = Math.PI * radius ** 2;
        return areaCircle;
    }
}

// Create a function named "createCircle" that takes as argument the radius of the circle and that return a object of type Circle

export function createCircle(params: {radius: number}): Circle {

    const circle: Circle = {
        "radius": params.radius,
        "getArea": () => {
            const radius = circle.radius
            const areaCircle = Math.PI * radius ** 2;
            return areaCircle;
        }
    }

    return circle

}


// Create a third circle with the function "createCircle"

const myCircle3 = createCircle({"radius" : 8})

console.log(myCircle3.radius)
console.log(myCircle3.getArea())

myCircle3.radius = 88

console.log(myCircle3.radius)
