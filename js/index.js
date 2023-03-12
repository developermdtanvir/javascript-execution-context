document.getElementById("submit").addEventListener('submit',(e)=>{
    e.preventDefault()
    const {name,email,color,date} = e.target
    console.log(name.value,email.value,color.value,date.value);
})  