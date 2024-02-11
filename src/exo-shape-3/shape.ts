import { assert } from "tsafe"

export type Shape = {
    type: "circle" | "square" | "rectangle"
    radius?: number
    sideLength?: number
    height?: number
    width?: number
}

/**
 * If circle then there must be a radius.
 * If square then there must be a sideLength
 * If rectangle then there must be a height and a width
 * */
export function getArea(shape: Shape): number {
    switch (shape.type) {
        case "circle":

            assert(shape.radius !== undefined, "A circle should always have a radius!!!!!")
            return Math.PI * shape.radius ** 2

        case "square":
            assert(shape.sideLength !== undefined, "A square should always have a sideLength!!!!!")
            return shape.sideLength ** 2

        case "rectangle":
            assert(shape.height !== undefined && shape.width !== undefined, "A rectangle should always have a height and a width!!!!!")
            return shape.height * shape.width
    }
}
