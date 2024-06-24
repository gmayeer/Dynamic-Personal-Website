const dest_sec1 = document.querySelector(".dest_sec1")
const sec1 = document.querySelector(".sec1")

dest_sec1.addEventListener("click", () => {
    sec1.classList.add("destaque")
    setTimeout(() => {
        sec1.classList.add("undestaque")
    }, 1000);
    sec1.classList.remove("undestaque")
})

const dest_sec2 = document.querySelector(".dest_sec2")
const sec2 = document.querySelector(".sec2")

dest_sec2.addEventListener("click", () => {
    sec2.classList.add("destaque")
    setTimeout(() => {
        sec2.classList.add("undestaque")
    }, 1000);
    sec2.classList.remove("undestaque")
})

const dest_sec3 = document.querySelector(".dest_sec3")
const sec3 = document.querySelector(".sec3")

dest_sec3.addEventListener("click", () => {
    sec3.classList.add("destaque")
    setTimeout(() => {
        sec3.classList.add("undestaque")
    }, 1000);
    sec3.classList.remove("undestaque")
})

const dest_sec4 = document.querySelector(".dest_sec4")
const sec4 = document.querySelector(".sec4")

dest_sec4.addEventListener("click", () => {
    sec4.classList.add("destaque")
    setTimeout(() => {
        sec4.classList.add("undestaque")
    }, 1000);
    sec4.classList.remove("undestaque")
})


