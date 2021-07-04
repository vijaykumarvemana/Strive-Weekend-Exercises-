const btn = document.getElementById('button')
btn.onclick =  function (){
    const inputValue = document.getElementById('input').value
    if(inputValue.length == 0){
        alert("Empty field")
    }else{
        const h1 = document.querySelector('h1')  
        const title = document.getElementsByTagName('title') 
        title.innerHTML = `${inputValue}`
        h1.innerHTML = `${inputValue}`
    }   
}

const bt = document.querySelectorAll('#action')
for(b of bt){
    b.onclick = function(){
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const b = document.createElement('button')
    b.innerHTML = "button"
    b.onclick = function (){
        li.remove()
    }
    li.appendChild(b)
    ul.appendChild(li)
}
}
