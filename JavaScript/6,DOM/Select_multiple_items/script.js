const lists = document.querySelectorAll('li')
for(let i = 0;i < lists.length;i++ ){
    const list = lists[i]
    list.textContent = `${i+1}.${list.textContent}`
    lists[i].style.color = 'darkgreen'
    lists[i].style.fontWeight = 'bold'
    list.style.padding = '5px'
    if(i % 2 === 0){
    list.style.backgroundColor = 'lightblue'
    }
    else{
     list.style.backgroundColor = 'lightgrey'
    }
}