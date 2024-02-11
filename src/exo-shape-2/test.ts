import {Shape, getArea} from "./shape"

const circle: Shape = {
    "type": "circle",
    "radius": 23
}

const areaOfShape: number = getArea(circle)
console.log(areaOfShape)