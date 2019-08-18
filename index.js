const promiseTakes500ms = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number)
            resolve(number)
        }, 500)
    })
}

const asyncForEach = async (array, callback) => {
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
    const array = [...Array(100).keys()]
    asyncForEach(array, promiseTakes500ms)
}

main()
