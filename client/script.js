document.addEventListener("DOMContentLoaded", function () {
    socket = io.connect(window.location.origin);
    const cube = document.querySelector('#cube')
    const info = document.querySelector('.info')

    // Denne besked sendes fra node-serveren når der oprettes forbindelse
    socket.on('connect', () => {

        console.log('connected to socket')

        window.addEventListener("deviceorientation", event => {
            cube.style.webkitTransform =
            cube.style.transform =
                'rotateX(' + event.beta + 'deg) ' +
                'rotateY(' + event.gamma + 'deg) ' +
                'rotateZ(' + event.alpha + 'deg)' 
        })
        cube.addEventListener('touchstart', () => {
            //send
        })
        cube.addEventListener('touchend', () => {
            //stop sending
        })
    })
})