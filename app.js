// selecting Elements

const showModal = document.querySelector(".btn")
const closeModal = document.querySelector(".icon")
const modal = document.querySelector(".modal-overlay")

// setting up the functionality

showModal.addEventListener('click',()=>{
    modal.classList.add("show-overlay")
})

closeModal.addEventListener('click',()=>{
    modal.classList.remove("show-overlay")
})