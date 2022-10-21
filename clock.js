const secHand = document.querySelector("[data-second]")
const minHand = document.querySelector("[data-minute]")
const hourHand = document.querySelector("[data-hour]")

function setClock(){
    console.log("clock")
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()
    const minutes = currentDate.getMinutes()
    const hours = currentDate.getHours()
    //console.log(seconds);
    setRotation(secHand, seconds)
    setRotation(minHand, minutes)
    setRotation(hourHand, hours)
    //console.log(seconds);
}

function setRotation(hand, rotationDeg){
    hand.style.setProperty('--rotation', rotationDeg * 360)
}

setInterval(setClock, 1000)
clockSet();