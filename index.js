const board = document.querySelector('#board')

const squares = new Array(9).fill("");

(function(){
    squares.forEach((cell, i) => {
        const elements = document.createElement('div')
        elements.classList.add('square')
        elements.id = i;
        board.append(elements)
    }
    )
})();