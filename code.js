let progress = 0

let nextButton = document.querySelector(`.Next`);

let prevButton = document.querySelector(`.Previous`)

let progressBar = document.querySelector(`.filled`);
  

function increase() {

  progress += (1 / 3) * 100
  progressBar.style.width = `${progress}%`
  if (progress > 100) {
    window.alert(`Its OK`)
    progress=100
  }
}

function dicrease() {
  progress -= (1 / 3) * 100
  progressBar.style.width = `${progress}%`;
  if (progress < 0) {
    window.alert(`You like clicking too much`)
    progress = 0
  }
}

prevButton.addEventListener(`click` , dicrease)
nextButton.addEventListener(`click`, increase)