const box = document.querySelector('.box')
window.addEventListener('scroll', function () {
    const top1 = document.documentElement.scrollTop
    if (top1 >= 280) {
        box.style.opacity = '1'
        box.style.cursor = 'pointer'
    }
    else {
        box.style.opacity = '0'
        box.style.cursor = 'default'
    }
})
box.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
})