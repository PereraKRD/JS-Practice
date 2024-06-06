const btn = document.getElementById("btn");

//Event Handler
btn.onclick = function(e){
    console.log(e)
}

//Event Listener
btn.addEventListener("click",function(e){
    console.log(e)
})
