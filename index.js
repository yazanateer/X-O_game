const board = document.querySelector('#board')
const squares = new Array(9).fill("");
const info_game = document.querySelector('#info')
info_game.textContent ="Our game "
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
    if(!squ.target.textContent){
    const view_player = document.createElement('div')
    view_player.classList.add(current_player)
    view_player.textContent = current_player
    squ.target.append(view_player)
    current_player = (current_player=== "X"?"O":"X")}
    info_game.textContent = "now the " + current_player
    check_Winner()

}

function check_Winner(){
    const cells = document.querySelectorAll(".square")
    const wining = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];




wining.forEach(array => {
  const O_wining =  array.every(cell => cells[cell].firstChild?.classList.contains('O'))

if(O_wining){
    info_game.textContent = "the winner is O "
    cells.forEach(square => square.replaceWith(square.cloneNode(true)))
    return 
}
})



wining.forEach(array => {
    const X_wining =  array.every(cell => cells[cell].firstChild?.classList.contains('X'))
  
  if(X_wining){
      info_game.textContent = "the winner is X "
      cells.forEach(square => square.replaceWith(square.cloneNode(true)))
      return 
  }
})

}