const promiseTakes2000ms = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number)
            resolve(number)
        }, 2000)
    })
}

const callFunctionOnEachArrayElementInBatches = async (array, callback) => {
    console.log(`Starting to execute ${array.length} promises`)
    while (array.length > 0) {
        console.log("=== Waiting for the batch to be resolved")
        const chunkSize = 10
        const batch = array.splice(0, chunkSize)
        await Promise.all(batch.map(callback))
        console.log("*** The batch has been all resolved")
    }
}

const main = () => {
    const array = [...Array(40).keys()]
    callFunctionOnEachArrayElementInBatches(array, promiseTakes2000ms)
}

main()
