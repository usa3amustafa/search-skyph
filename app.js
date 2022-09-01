const searchBox = document.querySelector('.search-input')
const suggestionsContainer = document.querySelector('.suggestions-container')
const overlay = document.querySelector('.overlay')

searchBox.addEventListener('click', () => {
  suggestionsContainer.classList.add('show-suggestions-container')
  overlay.classList.add('show-overlay')
})

overlay.addEventListener('click', () => {
  suggestionsContainer.classList.remove('show-suggestions-container')
  overlay.classList.remove('show-overlay')
})
