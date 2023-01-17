

const elem = document.querySelector('#ragaca')
const blockElem = document.querySelector('#block')
const image = document.querySelector('.image')


elem.addEventListener('click' , () => {
    image.classList.add('activeImage')
    blockElem.classList.add('active')
})