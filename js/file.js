// ================== variable ==============================
let VendorInput = document.getElementById("vendor");
let mediaInput = document.getElementById("media");
let cropSpendInput = document.getElementById("cropSpend");
let teamProjectInput = document.getElementById("teamProject");
let buttonBrand = document.querySelectorAll("button")
let progress = document.querySelectorAll(".porogress-items > span:first-child span")
let span = document.querySelectorAll(".porogress-items > span:last-child ")
let BrandName = document.querySelector(".text > p:first-child")
let clearButton=document.getElementById("clearBtn")
let ErrorBoox= document.querySelector(".Error-boox")
let layoutErrorBoox= document.querySelector(".layaout")
let BrandProgress=span[0]
let UnlimitedRewards=span[1]
let lifetimeRewards=span[2]
// ================== sum function  ==============================
function sum() {
    {
        return(
            Number(VendorInput.value)+
            Number(mediaInput.value)+
            Number(cropSpendInput.value)+
            Number(teamProjectInput.value)
            )
            
        }
    }
// ================== Rewards function  ==============================
function RewardsCalculate() {
   
    UnlimitedRewards.innerHTML =(sum() * 1.1).toFixed(6)
    lifetimeRewards.innerHTML = (sum() * 1.2).toFixed(6)
}
// ================== clear input  ==============================
function clearInput() {
    VendorInput.value=""
    mediaInput.value="" 
    cropSpendInput.value=""
    teamProjectInput.value=""
    UnlimitedRewards.innerHTML="0.0"
    lifetimeRewards.innerHTML="0.0"
    BrandProgress.innerHTML="0.0"
    progressBar()
}
clearButton.addEventListener("click",()=>{
    clearInput()
})
// ================== Chick input  ==============================
function chickInput() {
    if(
        VendorInput.value.length==0 ||
         mediaInput.value.length==0 ||
         cropSpendInput.value.length==0 ||
        teamProjectInput.value.length== 0
    )
    {
        return true
        }
}
// ================== toggleClass Button ==============================
function toggleClass(e)
{
    for (let i = 0; i < buttonBrand.length; i++)
    {
            buttonBrand[i].classList.remove("active")
        }
        e.target.classList.add("active")
        
    }
// ================== toggleClass Button ==============================
function hanelErrorBox()
{
    ErrorBoox.classList.add("visableBoox")
    ErrorBoox.classList.remove("hiddenBoox")
    layoutErrorBoox.classList.add("layaoutVisable") 
    ErrorBoox.addEventListener("click",()=>{
        ErrorBoox.classList.add("hiddenBoox")
        ErrorBoox.classList.remove("visableBoox")
        layoutErrorBoox.classList.remove("layaoutVisable")

        
    })
}
// ================== progress ==============================
function progressBar() {

    for (let i = 0; i < progress.length; i++) {
        console.log(progress[i])
        
        for (let j = i; j <=i; j++) { 
           
            progress[i].style.width=span[j].innerHTML+"%"
        }
        
    }
    // progress.forEach((span)=>{
    //     span.style.width=span.dataset.width
    // })
    // progress.forEach((span)=>{
    //      span.dataset.width=
    // })
}
// ================== Brands function  ==============================
// Brex
buttonBrand[0].addEventListener("click", (e) => {
    if (!chickInput())
    {
        BrandName.innerHTML=e.target.innerHTML+":"
        BrandProgress.innerHTML=(sum() * 0.3).toFixed(6)
        RewardsCalculate()
        toggleClass(e)
        progressBar(e)
        
    }
    else {
        hanelErrorBox()

    }
})
// Stripe
buttonBrand[1].addEventListener("click", (e) => {
    
    if (!chickInput())
    {
        BrandProgress.innerHTML=(sum() * 2.9).toFixed(6)
        BrandName.innerHTML=e.target.innerHTML+":"
        RewardsCalculate()
        toggleClass(e)
        progressBar()
    }
    else {
        hanelErrorBox()
    }
})
// Amex
buttonBrand[2].addEventListener("click", (e) => {
    if (!chickInput())
    {
        BrandProgress.innerHTML=(sum() * 1.3).toFixed(6)
        BrandName.innerHTML=e.target.innerHTML+":"
        RewardsCalculate()
        toggleClass(e)
        progressBar()
    }
    else {
        hanelErrorBox()
    }
})





 


