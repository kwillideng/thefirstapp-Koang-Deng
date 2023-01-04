const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })
    
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('draging')
    })
})

containers.forEach(conatainer => {
    conatainer.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(conatainer, e.clientY)
        const draggable = document.querySelector('.dragging')
        conatainer.appendChild(draggable)
    })
})

function getDragAfterElement(conatainer, y) {
    const draggableElement = [...conatainer.querySelectorAll('.draggable:not(.dragging)')]
    

draggableElement.reduce((closest, child) => {
  const box = child.getBoundingClientRect()
  const offsex = y - box.top - box.height / 2
  console.log(offset)
  if (offset < 0 && offset > closest.offest) {
    return { offset: offset, element: child }
  } else {
    return closest
  }

  
}, { offset: Number.NEGATIVE_INFINITY })
}