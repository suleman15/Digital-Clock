let hourDiv = document.querySelector('.hour span')
let minDiv = document.querySelector('.min span')
let secDiv = document.querySelector('.sec span')
let session = document.querySelector('.session')

setInterval(updateDigitalClock, 1000)

function updateDigitalClock () {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(hour > 12) {
        hour = hour - 12;
    }

    if(hour >= 12){
        session.innerText = 'PM'
    }else {
        session.innerText = 'AM'
    }


    hourDiv.innerText = hour < 10 ? `0${hour}` : hour
    minDiv.innerText = min < 10 ? `0${min}`: min
    secDiv.innerText = sec < 10 ? `0${sec}`: sec
}

updateDigitalClock()
