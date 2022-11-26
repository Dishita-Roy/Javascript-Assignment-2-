let btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
    let user_input = document.querySelector("#input");
    if(user_input.value != "") {
        if(document.querySelector(".data").childElementCount == 0){
            generate(user_input);
        } else{
            document.querySelector(".data").innerHTML = "";
            generate(user_input);
        }
    }
})

function generate(user_input) {
    var qrcode = new QRCode(document.querySelector(".data"),{
       correctLevel : QRCode.CorrectLevel.H
    });
}

console.log(qrcode);


let download = document.createElement("button");
document.querySelector(".data").appendChild(download);

let download_link = document.createElement("a");
download_link.setAttribute("download", "qrcode.png");
download_link.innerText = "Download";
download.appendChild(download_link);

if(document.querySelector("#img").getAttribute("src") == null){
    setTimeout(() => {
        download_link.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }, 300);
} else {
    setTimeout(() => {
        download_link.setAttribute("href", `${document.querySelector(".qr-code img").getAttribute("src")}`);
    }, 300);
}






