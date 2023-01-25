const board=document.querySelector('#board')
const SQUARES_NUMBER=550
const colors=['#18AC18','#D7D21E','#D7841E',
    '#D7231E','#AB186E','#6B198F','#3B2494','#223F90','#137D82']

for (let i=0; i<SQUARES_NUMBER; i++){
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=>
        setColor(square)
    )
    square.addEventListener('mouseleave',()=>
        removeColor(square)
    )
    board.append(square)
}

function setColor(element) {
    const color=getRandomColors()
    element.style.backgroundColor = color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow=`0 0 2px #000`
}
function getRandomColors() {
    const index= Math.floor(Math.random()*colors.length)
    return colors[index]
}