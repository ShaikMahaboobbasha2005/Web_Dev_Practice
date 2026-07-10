const image = document.querySelector('img')
console.log(image.src)
console.log(image.getAttribute('alt'))
image.src = 'https://media.istockphoto.com/id/645788690/photo/funny-sheep-portrait-of-sheep-showing-tongue.webp?b=1&s=612x612&w=0&k=20&c=fquQCgZYpGpZqFLP-2_pIgHmFcNpm3cG6nlQDo3n7yM='
image.setAttribute('alt','sheep')
console.log(image.getAttribute('alt'))
console.log(image.getAttribute('src'))
image.style.width = '300px'
image.style.border = '4px solid green'
image.style.boxShadow = '5px 5px 10px darkgrey'
image.style.borderRadius = '25px'

