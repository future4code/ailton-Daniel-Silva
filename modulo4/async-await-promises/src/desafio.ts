const sayHi = () => {
    console.log("Oi")
}

const messageHi = async (): Promise<any> => {
    return new Promise (() => {
        setTimeout(() => {
            sayHi()
        }, 5000)
    })
}

messageHi()