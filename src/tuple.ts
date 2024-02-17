export function getElement(
    param: {
        arr: [string, number, string, string],
        index: number
    }
): string | number {
    const {arr, index} = param
    const element = arr[index]

    return element
}

const response = getElement({
    "arr": ["a", 33, "c", "d"],
    "index": 3
})
console.log(response)


type Coordinate = [number, number]

type Coordinate2= {
    x: number;
    y: number;
}

const p1: Coordinate =[1, 2];

const p2: Coordinate2 = { "x": 1, "y": 2 }



