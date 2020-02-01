const pics = [
    'imgs/kitty_basket.JPG'
    'imgs/kitty_bed.JPG'
    'imgs/kitty_door.jpg'
    'imgs/kitty_laptop.jpg'
    'imgs/kitty_sink.JPG'
    'imgs/kitty_wall.jpg'
]

const button = document.querySelector('button')
const img = document.querySelector('img')
let index = 0
button.addEventListener('click'm function() {

    index += 1
    if(index pics.length){
        index = 0
    }
    img.src()
})