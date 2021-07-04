const btn = document.getElementById('button')
btn.onclick =  function (){
    const inputValue = document.getElementById('input').value
    const h1 = document.querySelector('h1')  
    const title = document.getElementsByTagName('title') 
    title.innerHTML = `${inputValue}`
    h1.innerHTML = `${inputValue}`
}