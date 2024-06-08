// const myPromise = new Promise((resolve,reject) => {
//     let randomNumber = Math.random()
//     console.log(randomNumber)
//     if(randomNumber < 0.5){
//         reject("less than 0.5")
//     }
//     else{
//         resolve("more than 0.5")
//     }    
// })

const promiseFunction = () => {
    return new Promise((resolve,reject) => {
        let randomNumber = Math.random()
        console.log(randomNumber)
        if(randomNumber < 0.5){
            reject("less than 0.5")
        }
        else{
            resolve("more than 0.5")
        }    
    })
}

// console.log(promiseFunction())

promiseFunction().then((res) => {
    console.log(res)
    document.getElementById("result").innerHTML = res
}).catch((err) => {
    console.log(err)
    document.getElementById("result").innerHTML = err
}).finally(() => {
    document.getElementById("finally").innerHTML = "DONE"
})