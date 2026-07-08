const emergencyCalls = document.querySelector(".header-btn")
const realMessage = "Emergency Noticed"

emergencyCalls.addEventListener("click", function() {
    alert( "We are going to call you Very Soon")
})

 
const readMore = document.querySelector(".read-more")
const moreParagraph = document.querySelector(".more-paragraph")
readMore.addEventListener("click", function () {
    if (moreParagraph.style.display ==  "block"){
        moreParagraph.style.display = "none"
    }
    else if (moreParagraph.style.display = "none"){
        moreParagraph.style.display = "block"
    }
})

//Loops loops
let youth = "Anyone between 13 yrs to 19 yrs"
function greetUser (time,name) {
    console.log( `Good ${time}, ${name}`);
}

greetUser ("Morning","John")
greetUser ("Night","Mark angel Comedy")
greetUser ("Day","Baraka Builds")




