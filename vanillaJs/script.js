const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

/** class add/remove to change the css of selected div to visually identify */
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        console.log('start');
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
        console.log('end');
    });
});

/** selected div drag & drop in places  */
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        // to ignore cursor option no-drop/not-allowed
        e.preventDefault()
        const onElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        // either element is not moved or bottom of all(no child after the bottom)
        if (onElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, onElement)
        }
    })
})

/** find the div, after which the selected div will be dropped  **/
function getDragAfterElement(container, y) {
    // select all draggable component, except the dragging one
    // querySelectorAll returns nodelist, not array
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        // get area position of each box(in this case <p>); {x,y,width,height,top,right,bottom,left}
        const box = child.getBoundingClientRect()
        // overlay, distance between center of the box & mouse cursor
        // if cursor is below a box, will get positive, otherwise negative number
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}
