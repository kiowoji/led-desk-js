const board = document.querySelector('#board')
const colors = ['#FFA8D3', '#FF7DBD', '#BC88FE', '#D3AFFF', '#FFAC7D', '#FFAC7D', '#CDFF7D', '#DEFFA8', '#4C9EFA', '#7BC6FF', '#FFFE8C']
const squareNumber = 780

for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square) 
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}