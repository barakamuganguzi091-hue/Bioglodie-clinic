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







