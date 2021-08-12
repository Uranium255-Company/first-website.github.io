let scrollLeftButton = document.getElementById('scrollLeft')
let scrollRightButton = document.getElementById('scrollRight')
let slider = document.getElementById('slider')
let scrolled = 0;
let toScroll = slider.clientWidth
scrollLeftButton.addEventListener('click', (e)=> {
    if (scrolled <= slider.clientWidth * (slider.childElementCount - 2)){
        scrolled += toScroll
    }
    slider.scroll(scrolled, 0)
    console.log(scrolled)

})

scrollRightButton.addEventListener('click', (e)=> {
    scrolled -= toScroll
    if (scrolled < 0){
        scrolled = 0
    }
    slider.scroll(scrolled, 0)
})