let scrollContainer = document.querySelector('.gallery')
let angle_droite = document.getElementById('angle-droite')
let angle_gauche = document.getElementById('angle-gauche')
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault()
    scrollContainer.scrollLeft += event.deltaY
})
angle_droite.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 700
})
angle_gauche.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 700
})