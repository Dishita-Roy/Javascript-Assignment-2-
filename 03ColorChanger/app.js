const btn = document.getElementById("button");
let div = document.getElementById("canvas");
const random = () => {
    let val = "012345678ABCDEF";
    let cons = "#";
    for (let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)];
    }
    return cons;
}


btn.addEventListener("click",change);
function change(){
    div.style.backgroundColor = random();
};

