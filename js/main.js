window.addEventListener('DOMContentLoaded',()=>{
    let openModal = document.querySelector('.follow-btn')
    let closeModal = document.querySelector('.close-btn')
     
    openModal.addEventListener('click',()=>{
        document.querySelector('.modal').classList.add('show-modal')
    })
    closeModal.addEventListener('click',()=>{
        document.querySelector('.modal').classList.remove('show-modal')
    })
})