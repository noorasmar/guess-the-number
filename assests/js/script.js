const randomSection = document.querySelector('.random')
const btn = document.getElementById("btn")
const blurNum = document.querySelector(".blur-num")
const hiddenNum = document.querySelector(".hidden-num")
const btnNum = document.querySelectorAll('.board button')
const success = document.querySelector('.success')
const hight = document.querySelector('.hight')
const low = document.querySelector('.low')

let random = 0

btn.addEventListener('click',function hide(){
    random = Math.floor(Math.random() * 10) + 1
    blurNum.innerHTML = random
    hiddenNum.style.display = "block"
    randomSection.style.display = 'none'
})

btnNum.forEach((el)=>{
    el.addEventListener('click',function click(){
        let num = +this.innerText
        if(num === random){
            success.style.display = 'block'
            blurNum.style.filter = 'blur(0px)'
            hight.remove()
            low.remove()
        }else 
        if(num > random){
            low.style.display = "none";
            hight.style.display = 'block'
            setTimeout(function() {
                hight.style.display = "none";
            }, 900); 
        }else 
        if(num < random){
            hight.style.display = "none";
            low.style.display = 'block'
            setTimeout(function() {
                low.style.display = "none";
            }, 900); 
        }
    })
})