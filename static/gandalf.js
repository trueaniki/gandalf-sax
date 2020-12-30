document.getElementById('flex').width = screen.width
document.getElementById('flex').height = screen.height


document.getElementById('go').onclick = function (event) {
    document.documentElement.requestFullscreen()
    document.getElementById('go').style.display = "none"
    document.getElementById('flex').style.display = "block"
    document.getElementById('sound').play()
}