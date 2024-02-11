type Circle = {
    type: "circle",
    radius: number
}

type Square = {
    type: "square";
    sideLength: number
}

type Rectangle = {
    type: "rectangle",
    height: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getArea(shape: Shape): number {
    switch (shape.type) {
        case "circle": return Math.PI * shape.radius ** 2
        case "square": return shape.sideLength ** 2
        case "rectangle": return shape.height * shape.width
    }
}

const circle: Circle = {
    "type": "circle",
    "radius": 23
}

const areaOfShape: number = getArea(circle)
console.log(areaOfShape)