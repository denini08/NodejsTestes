function soma(a, b) {
    return new Promise((resulve, reject) => {
        if (a < 0 || b < 0) {
            reject('Fudeo')
        } else {
            resulve(a + b)
        }
    })

}

soma(11, 11).then((res) => {
    console.log('aeeee ' + res)
}).catch((res) => {
    console.log(res)
})