function getElementButBetter(
    param: {
        arr: string[],
        index: number
    }
) {
    const {arr, index} = param
    const element = arr[index]

    return element
}

const response = getElementButBetter({
    "arr": ["a", "b", "c", "d"],
    "index": 2
})
console.log(response)