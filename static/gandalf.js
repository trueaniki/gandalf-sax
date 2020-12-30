document.getElementById('flex').width = screen.width
document.getElementById('flex').height = screen.height

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
    }
}


document.getElementById('go').onclick = function (event) {
    // if (window.matchMedia("(min-width: 768px)").matches)
    openFullscreen(document.documentElement)
    document.getElementById('go').style.display = 'none'
    document.getElementById('flex').style.display = 'block'

    setInterval(() => {
        document.getElementById('sound').play()
    }, 500)
}