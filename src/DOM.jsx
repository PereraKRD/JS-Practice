//getElementById
const heading = document.getElementById("heading");
heading.innerHTML = "New Heading"
heading.style.color = "red"
heading.style.fontFamily = "arial"

 
//getElementByClassName 
const section = document.getElementsByClassName("section");
for(let i =0; i<section.length ; i++){
    section[i].style.color = "green"
    section[i].style.fontFamily = "arial"
    section[i].style.fontSize = "0.9rem"
}


//getElementByTagName
const firstdiv = document.getElementById("imgarea")
const firstimg = firstdiv.getElementsByTagName("img")

for(let i =0; i<firstimg.length ; i++){
    firstimg[i].style.width = "100%"
    firstimg[i].style.maxHeight = "290px"
    firstimg[i].style.objectFit = "cover"
}


//Query Selector
const bodyContent = document.querySelector("body")
bodyContent.style.backgroundColor = "#b9f1f2"

const items = document.querySelector(".items")
items.innerHTML += "<li>new list item 1</li><li> new list item 2</li>"

const galeryimgcont = document.querySelector(".galeryimgcont");
galeryimgcont.style.display = "flex"
galeryimgcont.style.flexWrap = "wrap"

//QuerySelectorAll
const galleryimg = document.querySelectorAll(".galleryimg")
galleryimg.forEach((element) => {
    element.style.maxWidth = "50%"
})

const allitems = document.querySelectorAll(".items li")
allitems.forEach((li) => {
    li.style.fontFamily = "arial"

})