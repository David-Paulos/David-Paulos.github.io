const carouselInner = document.getElementById('carousel__inner')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')


const colors = ['orange', 'blue', 'green', 'yellow', 'pink', 'palegreen']
let n = -1

arrowLeft.addEventListener('click', () => {
    while(n > -1 ){
        n--
        if(n === -1){
            carouselInner.style.backgroundColor = 'red'
            console.log(n)
            return    
        } else {
            carouselInner.style.backgroundColor = colors[n]
            break;
        }  
    }
    console.log(n)
})

arrowRight.addEventListener('click', () => {
    while(n < colors.length-1){
        n++
        carouselInner.style.backgroundColor = colors[n]
        break;
    }
    console.log(n)
})