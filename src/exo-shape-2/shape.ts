
export type Shape = Circle | Square | Rectangle

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

export function getArea(shape: Shape): number {
    switch (shape.type) {
        case "circle": return Math.PI * shape.radius ** 2
        case "square": return shape.sideLength ** 2
        case "rectangle": return shape.height * shape.width
    }
}
