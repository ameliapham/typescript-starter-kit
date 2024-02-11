export function getElement(
    param: {
        arr: string[],
        index: number
    }
) {
    const {arr, index} = param
    const element = arr[index]

    return element
}

const response = getElement({
    "arr": ["a", "b", "c", "d"],
    "index": 3
})
console.log(response)