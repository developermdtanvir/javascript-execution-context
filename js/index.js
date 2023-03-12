const submitButton = document.getElementById("submit")

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target.name.value);
})