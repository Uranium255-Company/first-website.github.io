const mainHomebar = document.getElementById('main_homebar')
// Scrolling Navbar initial values
let amountScrolled = 0;
let deltaScroll = 0;
let windowScrollingFunction = (event) => {
    deltaScroll = amountScrolled - window.scrollY
    amountScrolled = window.scrollY
    if (amountScrolled > mainHomebar.clientHeight) {
        if (deltaScroll> 0) {
            mainHomebar.classList.add('homebar_go_down')
            mainHomebar.classList.remove('homebar_go_up')
        } else {
            mainHomebar.classList.add('homebar_go_up')
            mainHomebar.classList.remove('homebar_go_down')
        }
    }

}
window.addEventListener('scroll', windowScrollingFunction)

// moving the Tiles

const move = () => {
    const allOfTheTiles = document.querySelectorAll('.tiles')
    const informationGridItems = document.querySelector('.information_grid').children
    const allOfTheSlidingCards = Array.from(document.querySelector('.cards_sliding').children)
    allOfTheTiles.forEach((tile)=> {
        tile.classList.add('normalize')
    })
    Array.from(informationGridItems).forEach(item=>{
        item.classList.add('normalize')
    })
    allOfTheSlidingCards.forEach(slidingCard=>{
        slidingCard.classList.add('normalize')
    })
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }
  
function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            let target = entry.target
            Array.from(target.children).forEach(item=>{
                item.classList.add('normalize')
            })
        }
    });
}
  
let observerForTiles = new IntersectionObserver(callback, options);
observerForTiles.observe(document.getElementById('threeTiles'));

function individualCallback(entries, observer){
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('normalize')
        }
    })
}

let observerIndividual = new IntersectionObserver(individualCallback, options)

document.querySelectorAll('.item').forEach(item=> {
    observerIndividual.observe(item)
})
