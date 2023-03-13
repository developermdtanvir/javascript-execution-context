export function saveToDb (id,valueId){
    document.getElementById(id).addEventListener('click',(e)=>{
        e.preventDefault();
        let  name = document.getElementById(valueId).value ;
        localStorage.setItem('name',name);
        document.getElementById(valueId).value = ""
        console.log(localStorage.getItem('name'));
    })
    
}

export function removeToDb(id,storage){
    document.getElementById(id).addEventListener('click',(e)=>{
        e.preventDefault()
        localStorage.removeItem(storage);
    })
}