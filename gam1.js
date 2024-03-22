let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("reset");
let newgamebtn =document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turn0=true;//player X, player Y
const winpattern =
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

boxes.forEach((box)=> {
    box.addEventListener("click",() => {
        if (turn0) {
        box.innerText="0";
        turn0 = false;//player X
    }
        else{
            { box.innerText="X";
            turn0=true;}//PLAYER Y
        }
        box.disabled = true;

        checkwin();
    });
});
const disableboxs= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxs= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
};
const showwinner= (winner) =>{
    msg.innerHTML=`congratulation, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxs();
};
const checkwin = () =>{
    //traverse
    for (let pattern of winpattern){
    //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    //console.log(
        //boxes[pattern[0]].innerHTML, 
        //boxes[pattern[1]].innerHTML, 
        //boxes[pattern[2]].innerHTML);

        let pos1val=  boxes[pattern[0]].innerText;
        let pos2val=  boxes[pattern[1]].innerText;
        let pos3val=  boxes[pattern[2]].innerText;
        if (pos1val !="" && pos2val !="" && pos3val !="")
        {
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
}
};
const resetgame=() =>{
    true0=true;
    enableboxs();
    msgcontainer.classList.add("hide");
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
