
function insert(num){
  document.querySelector(".textview").value += num ;

    return num;
  }
  console.log(insert(value));
  
  function equals(){
     let x = document.querySelector(".textview").value;

    let y = eval(x);
    document.querySelector(".textview").value = y;
  }
  
  function clean(){
    document.querySelector(".textview").value = " ";
  }
  
  function back(){
    let xyz = document.querySelector(".textview").value;
    document.querySelector(".textview").value = xyz.substr(0, xyz.length - 1);
   
  }