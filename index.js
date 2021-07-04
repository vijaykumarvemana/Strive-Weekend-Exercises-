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

function AddRow() {
    const table = document.getElementById("myTable")
    let row = table.insertRow(5)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    cell1.innerHTML = document.getElementById('cellOne').value
    cell2.innerHTML = document.getElementById('cellTwo').value
    cell3.innerHTML = document.getElementById('cellThree').value
    cell4.innerHTML = document.getElementById('cellFour').value
    cell5.innerHTML = document.getElementById('cellFive').value
  }
