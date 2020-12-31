document.getElementById('gandalf').width = screen.width
document.getElementById('gandalf').height = screen.height

function openFullScreen() {
    var elem = document.documentElement
    if (elem.requestFullscreen) {
        elem.requestFullscreen()
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen()
    }
}

function hideAll() {
    document.getElementById('go-button').style.display = 'none'
    document.getElementById('set-timer-button').style.display = 'none'
    document.getElementById('time-input').style.display = 'none'
    document.getElementById('timer').style.display = 'none'
    document.getElementById('wait-for-it').style.display = 'none'
}

function gandalf() {
    hideAll()
    document.getElementById('gandalf').style.display = 'block'
    document.getElementById('sound').play()
}

document.getElementById('go-button').onclick = function (event) {
    openFullScreen()
    gandalf()
}

document.getElementById('set-timer-button').onclick = function (event) {
    hideAll()
    openFullScreen()
    document.getElementById('wait-for-it').style.display = 'block'
    document.getElementById('timer').style.display = 'block'
    var doomsday = new Date(document.getElementById('time-input').value)
    var now = new Date()
    var dif = doomsday.getTime() - now.getTime()
    var interval = setInterval(() => {
        now = new Date()
        dif = doomsday.getTime() - now.getTime()
        document.getElementById('timer').innerHTML = Math.ceil(dif/1000)
        if(now.getTime() >= doomsday.getTime()) {
            clearInterval(interval)
            gandalf()
        }
    }, 1)
}