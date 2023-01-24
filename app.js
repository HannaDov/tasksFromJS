const item=document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')

for (const placeholder of placeholders){
    console.log(placeholder)
    placeholder.addEventListener('dragover', dragOver)
    placeholder.addEventListener('dragenter', dragEnter)
    placeholder.addEventListener('dragleave', dragLeave)
    placeholder.addEventListener('drop', drop)
}

item.addEventListener('dragstart',dragStart)
item.addEventListener('dragend',dragEnd)
function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(()=>event.target.classList.add('hide'),0)
}
function dragEnd(event) {
    event.target.className ='item'
}

function dragOver(event) {
    console.log('over');
    event.preventDefault()
}
function dragEnter(event) {
    console.log('event');
    event.target.classList.add('hovered')
}

function dragLeave(event) {
    console.log('leave');
    event.target.classList.remove('hovered')
}

function drop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}