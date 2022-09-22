const JumpMario = new Audio('sound/jump-mario.mp3')

const box = document.querySelector('.box');
const movel = document.querySelector('.movel')

document.addEventListener('touchstart', function(e){
        box.classList.add('jump')
        
        setTimeout(() => {
            box.classList.remove('jump')
        },1000)
    
    if(e.key === 'r'){
        location.reload()
    }
}, false)

document.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === 'ArrowUp'){
        box.classList.add('jump')
        
        setTimeout(() => {
            box.classList.remove('jump')
        },1000)
    }
    
    if(e.key === 'r'){
        location.reload()
    }
}, false)

let JumpSound = (e) => {
    if(e.key === 'Enter' || e.key === 'ArrowUp'){
        JumpMario.play()
    }
}

document.addEventListener('keydown', JumpSound, false)

const loop = setInterval(() => {
    const movelPosition = movel.offsetLeft
    const boxPositionBottom = +window.getComputedStyle(box).bottom.replace('px', '')
    const boxPositionTop = +window.getComputedStyle(box).top.replace('px', '')
    
    if(movelPosition <= 90 && boxPositionBottom < 100 && movelPosition > 0){
        movel.style.animation = 'none'
        box.style.animation = 'none'
        movel.style.left = `${movelPosition}px`
        box.style.top = `${boxPositionTop}px`
        document.removeEventListener('keydown', JumpSound, false)
    }
},10)
