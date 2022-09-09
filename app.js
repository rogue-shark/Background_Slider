const body = document.body
const slides = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')

let currSlide = 0
setBgToBody()  // executing for the first slide (i.e. index = 0)

rightArrow.addEventListener('click', () => {
    currSlide++
    if (currSlide > slides.length - 1){
        currSlide = 0
        
    }
    setBgToBody()
    setActiveSlide()
    // console.log(currSlide)
})

leftArrow.addEventListener('click', () => {
    currSlide--
    if (currSlide < 0){
        currSlide = slides.length - 1
        
    }
    setBgToBody()
    setActiveSlide()
    // console.log(currSlide)
})

//setting backgroud same as slides
function setBgToBody() {
    body.style.backgroundImage = slides[currSlide].style.backgroundImage
}


function setActiveSlide() {
    //remove active class from all
    for(const slide of slides){
        slide.classList.remove('active')
    }
    //only adding active class to the currently active slide
    slides[currSlide].classList.add('active')
}
