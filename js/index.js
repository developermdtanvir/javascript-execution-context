// problem number 1

document.getElementById('input').addEventListener('click',()=>{
    const userInput =  prompt("Enter Your Number")
     const userNumber = parseInt(userInput);
     if(userNumber){
         const totalNumber = userNumber + 200;
         return alert(`Your Number is ${totalNumber}`)
     }
 })

 // problem number2
 document.getElementById('location').addEventListener('click',()=>{
    const isLocation = confirm('Can You get Location')
    console.log(isLocation);
    if(isLocation){
        console.log(window.location.href);
    }

 })

var counter = 0;

function plus() {
  counter += 1;
  localStorage.setItem('counter',counter);
  document.getElementById("counter").innerText = counter;
}

let value = parseInt(localStorage.getItem('counter'));
document.getElementById("counter").innerText = value;