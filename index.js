const mainContainer = document.querySelector(".main-card")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.querySelector(".submit")
const rating = document.getElementById("grade")
const rates = document.querySelectorAll(".select")


submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate)=> {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})