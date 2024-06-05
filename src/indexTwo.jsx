 let stringsss = "Hello";
 console.log(typeof stringsss)

 let number11 = 0;
 console.log(typeof number11)

 let NUll = null;
 console.log(typeof NUll)

 let booLean = false;
 console.log(typeof booLean)

 const hobbies = [];
 let length = hobbies.push("string","john",false,{name : "Mcodes", country : "Sri Lanka"})
 var length2 = hobbies.push() //to get the length
 console.log(length)
 console.log(length2)

 console.log(hobbies)


//  var removed = hobbies.pop()
//  console.log(`you removed : ${removed}`)

//  removed = hobbies.pop()
//  console.log(`you removed : ${removed}`)

hobbies.forEach(hobby => {
    console.log(hobby)
})