const card = document.querySelector('.card')
const cardFront = document.querySelector('.card__front')
const cardBack = document.querySelector('.card__back')
const numberItem = document.querySelectorAll('.rating__item')
const button = document.querySelector('.card__button')
const ratingSpan = document.querySelector('.rating__span')
let numberSelect = 0

numberItem.forEach(element => {
  element.addEventListener('click', (event) => {
    for (const iterator of numberItem) {
      iterator.classList.remove('rating__item--select')
    }

    element.classList.add('rating__item--select')
    numberSelect = element.getAttribute('data-select')
    console.log(numberSelect)
  })
})

button.addEventListener('click', (event) => {
  if (!+numberSelect) return alert('Choose a score')
  ratingSpan.innerHTML = numberSelect
  cardFront.classList.add('opacity-0')
  card.classList.add('flip-vertical-right')
  setTimeout(() => {
    cardFront.classList.add('hidden')
    cardBack.classList.remove('hidden')
  }, 500)
})
