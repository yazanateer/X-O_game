const board = document.querySelector('#board')
const squares = new Array(9).fill("");

let current_player = "X";

(function(){
    squares.forEach((cell, i) => {
        const elements = document.createElement('div')
        elements.classList.add('square')
        elements.id = i;
        elements.addEventListener("click", print_player)
        board.append(elements)
    }
    )
})();

function print_player(squ){
    const view_player = document.createElement('div')
    view_player.classList.add(current_player)
    view_player.textContent = current_player
    squ.target.append(view_player)
    current_player = (current_player=== "X"?"O":"X")

}