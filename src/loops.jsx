//for loop

// for(let i =0; i<10 ; i++){
//     console.log(i)
// }

//while loop
// let i = 1;

// while(i<=10){
//     console.log(i)
//     i++
// }

//do-while loop
// let i = 0;
// do{
//     console.log(i)
//     i++
// }while(i<10)


//foreach loop
const numbers = [10,3,1,2]

numbers.forEach((number,i) => {
    console.log(i,number)
})

//for in loop
for(let number in numbers){
    console.log(numbers[number])
}

//for of loop
for(let number of numbers){
    console.log(number)
}

const employee = {
    name : "Ryan",
    age : 10
}

for(let value of employee){
    console.log(value)
}