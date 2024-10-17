window.addEventListener("scroll",function(){
    let div = document.querySelector('.contaider')
    div.classList.toggle ('rolagem', window.scrollY > 50)
})