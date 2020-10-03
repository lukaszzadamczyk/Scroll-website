const mainElement = document.querySelector('#main');
const sections = document.querySelectorAll('.section');
let sectionIndex = 0;
let isScroll = false;

document.addEventListener('mousewheel', function (event) {
    if (isScroll) return
    isScroll = true

    setTimeout(function () {
        isScroll = false
    }, 1000)


    const direction = event.wheelDelta < 0 ? 1 : -1;
    scroll(direction)



})

function scroll(direction) {
    if (direction === 1) {
        isLastSection = sectionIndex === sections.length - 1
        if (isLastSection) return
    } else if (direction === -1) {
        const isFirstSection = sectionIndex === 0
        if (isFirstSection) return
    }

    sectionIndex = sectionIndex + direction;
    scrollToCurrentSection()
}

function scrollToCurrentSection() {
    sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}