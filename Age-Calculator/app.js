const container = document.querySelector(".container");
const error = container.querySelector(".error");
const dateInp = container.querySelector("#dob");

dateInp.addEventListener("change", (x)=>{
    const dateString = x.target.value;
    getAge(dateString);
})

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

console.log(today);
console.log(birthDate);
console.log(today.getMonth());
console.log(today.getFullYear());

function calcAge(){ 
    
}

function displayAge(){
    
    
}

