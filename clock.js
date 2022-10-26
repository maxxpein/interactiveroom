const secHand = document.querySelector("[data-second]")
const minHand = document.querySelector("[data-minute]")
const hourHand = document.querySelector("[data-hour]")

function setClock() {
   const currentDate = new Date()
   const seconds = currentDate.getSeconds() / 60
   const minutes = (currentDate.getMinutes() + seconds) / 60
   const hours = (currentDate.getHours() + minutes) / 12

   console.log(currentDate)
   console.log(seconds)
   setRotation(secHand, seconds)

   console.log(minutes)
   setRotation(minHand, minutes)

   console.log(hours)
   setRotation(hourHand, hours)
}

function setRotation(hand, angle) {
   hand.style.setProperty('--rotation', angle * 360)
}

setInterval(setClock, 1000);
