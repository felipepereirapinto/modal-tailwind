const button = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

button.addEventListener('click', () => {
  modalWrapper
    .classList
    .remove('invisible')
})

document.onkeydown = event => {
    !modalWrapper.classList.contains('invisible')
    && event.key === 'Escape'
    && modalWrapper.classList.add('invisible')
}