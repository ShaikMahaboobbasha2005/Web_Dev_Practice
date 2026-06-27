const boxes = document.querySelectorAll('.box')
for(let i = 0;i <boxes.length; i++){
const box = boxes[i]
console.log(box.className)
}
boxes[1].classList.add('green')
boxes[2].classList.remove('active')
boxes[3].classList.toggle('hidden')
boxes[4].classList.replace('old','new')
