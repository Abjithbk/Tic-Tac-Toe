let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let msgcontainer = document.querySelector(".msg-container")
let newgamebtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")

let turnX=true;

const winPattern = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
const showWinner = (winner) => {
     msg.innerText = `Congratulations,Winner is ${winner}`
     msgcontainer.classList.remove("hide") 
     disable();   
}
const resetgame = () => {
     turnX=true;
     enableBoxes();
     msgcontainer.classList.add("hide")

}

const disableBoxes = () => {
   for(let box of boxes) {
    box.disabled=true
   }
}
const enableBoxes = () => {
  for(let box of boxes) {
   box.disabled=false
   box.innerText="";
  }
}
const checkWinner=() => {
   for(let pattern of winPattern) {
    let pos1val=boxes[pattern[0]].innerText
    let pos2val=boxes[pattern[1]].innerText
    let pos3val=boxes[pattern[2]].innerText

    if(pos1val!="" && pos2val!="" && pos3val!="") {
      if(pos1val===pos2val && pos2val===pos3val) {
        showWinner(pos1val);
      }
    }
   }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
        if(turnX) {
          box.innerText="X"
          turnX=false;
        }
        else {
          box.innerText="0"
          turnX=true;
        }
        box.disabled=true
        checkWinner();
  })
})

resetbtn.addEventListener("click",resetgame)
newgamebtn.addEventListener("click",resetgame)