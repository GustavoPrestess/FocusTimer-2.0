const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.sum')
const buttonRemoveMinutes = document.querySelector('.subtraction')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeeShop = document.querySelector('.coffeeshop')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const forest = new Audio('./sounds/Floresta.wav')
const rain = new Audio('./sounds/Chuva.wav')
const coffeeshop = new Audio('./sounds/Cafeteria.wav')
const fireplace = new Audio('./sounds/Lareira.wav')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

function addTimer() {
  minutes = Number(minutes) + 5
  updateTimerDisplay(minutes, 0)
}

function removeTimer() {
  if (minutes > 0) {
    minutes = Number(minutes) - 5
    updateTimerDisplay(minutes, 0)
  }
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimerOut)
}

function pauseTimer() {
  clearTimeout(timerTimerOut)
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      return
    }
    if (seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function audioForestPlay() {
  forest.play()
}
function audioForestPause() {
  forest.pause()
}
function audioRainPlay() {
  rain.play()
}
function audioRainPause() {
  rain.pause()
}
function audioCoffeshopPlay() {
  coffeeshop.play()
}
function audioCoffeshopPause() {
  coffeeshop.pause()
}
function audioFireplacePlay() {
  fireplace.play()
}
function audioFireplacePause() {
  fireplace.pause()
}

function togglePlay() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function togglePause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function desableForest() {
  buttonForest.classList.remove('active')
  forest.pause()
}

function desableRain() {
  buttonRain.classList.remove('active')
  rain.pause()
}

function desableCoffeeShop() {
  buttonCoffeeShop.classList.remove('active')
  coffeeshop.pause()
}

function desableFirePlace() {
  buttonFirePlace.classList.remove('active')
  fireplace.pause()
}

buttonPlay.addEventListener('click', function () {
  countdown()
  togglePlay()
})

buttonPause.addEventListener('click', function () {
  togglePause()
  pauseTimer()
})

buttonStop.addEventListener('click', function () {
  togglePause()
  resetTimer()
  desableForest()
  desableRain()
  desableCoffeeShop()
  desableFirePlace()
})

buttonAddMinutes.addEventListener('click', function () {
  addTimer()
})

buttonRemoveMinutes.addEventListener('click', function () {
  removeTimer()
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('active')
  if (forest.paused == true) {
    forest.play()
  } else {
    forest.pause()
  }
  forest.loop = true
  togglePlay()
  desableRain()
  desableCoffeeShop()
  desableFirePlace()
  resetTimer()
  countdown()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('active')
  if (rain.paused == true) {
    rain.play()
  } else {
    rain.pause()
  }
  rain.loop = true
  togglePlay()
  desableForest()
  desableCoffeeShop()
  desableFirePlace()
  resetTimer()
  countdown()
})

buttonCoffeeShop.addEventListener('click', function () {
  buttonCoffeeShop.classList.toggle('active')
  if (coffeeshop.paused == true) {
    coffeeshop.play()
  } else {
    coffeeshop.pause()
  }
  coffeeshop.loop = true
  togglePlay()
  desableForest()
  desableRain()
  desableFirePlace()
  resetTimer()
  countdown()
})

buttonFirePlace.addEventListener('click', function () {
  buttonFirePlace.classList.toggle('active')
  if (fireplace.paused == true) {
    fireplace.play()
  } else {
    fireplace.pause()
  }
  fireplace.loop = true
  togglePlay()
  desableForest()
  desableRain()
  desableCoffeeShop()
  resetTimer()
  countdown()
})
