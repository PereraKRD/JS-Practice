const employee = {
    name : "Ryam",
    age : 10,
    getmsg : function(){
        alert(this.name)
    }
}

// console.log(employee.name)
// employee.name = "Saman"
// console.log(employee.name)
// employee.getmsg()


//for loop to access each keys
 for(let key in employee){
    console.log(key + " : " + employee[key]);
 }

//if else shortcut
 let a =false;
 a ? console.log("true") : console.log("false")