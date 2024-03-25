// GSAP Section 
gsap.from("#bubble",{
    y:10,
    duration:1,
    yoyo:true,
    repeat:-1
})

/***********************************************/

const bubble = document.getElementById("bubble")
const bubbleInfo = document.getElementById("bubble-info")

const searchBtn = document.getElementById("search")

searchBtn.addEventListener("click",()=>{
    window.location.href = "./src/Filter Product page/SearchProduct.html"
})


let cardVisible = false;

bubble.addEventListener("click",()=>{
    gsap.from("#bubble",{
        rotate:360
    })
    if(cardVisible){
        gsap.to("#cards",{
            x:"15vw"
        })
        cardVisible = false
    }else{
        gsap.to("#cards",{
            x:"-15vw",
        })
        cardVisible = true
    }
})