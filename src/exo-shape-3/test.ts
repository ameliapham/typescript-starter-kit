import {Shape, getArea} from "./shape"

const mySquare: Shape = {
    "type": "square",
    "sideLength": 8
}

const areaOfShape: number = getArea(mySquare)
console.log(areaOfShape)