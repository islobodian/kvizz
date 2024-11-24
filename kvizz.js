let b = document.querySelector('.b')
let but1 = document.querySelector(".baton1")
let but2 = document.querySelector(".baton2")
let but3 = document.querySelector(".baton3")
let but4 = document.querySelector(".baton4")
let but5 = document.querySelector(".baton5")
let timer = document.querySelector(".timer")
let buy = document.querySelector(".buy")


let t = 300


 
//колір забарвлення кнопки - зелений
function color_green(b){
    b.style.background = "LawnGreen"
}
//колір червоний
function color_darkred(b){
    b.style.background = "darkred"
}
but1_select = false
but2_select = false
but3_select = false
but4_select = false
but5_select = false
buy_select = false

let timerinterval = 0

b.addEventListener('click', function(){

    if (b.textContent == "Забронювати") {
        b.textContent = "Відмінити"
        b.style.background = "red"
        b.style.color = "white"
        buy.style.opacity = "1"
        timer.style.color = "red"
        timerinterval = setInterval(function(){
            let minutes = Math.floor(t/60)
            let seconds = t % 60
            if (seconds < 10 ) {
                timer.textContent = "0" + minutes + ":" + "0" + seconds
            } else {
                timer.textContent = "0" + minutes + ":" + seconds
            }
            t--;

        },1000);
        
    }
    else {
        b.textContent = "Забронювати"
        b.style.background = "yellow"
        timer.style.color = "black"
        b.style.color = "black"
        buy.style.opacity = "0"
        if (but1_select != "buy") {
            but1_select = false
            color_darkred(but1)
        }
        if (but2_select != "buy") {
            but2_select = false
            color_darkred(but2)
        }
        if (but3_select != "buy") {
            but3_select = false
            color_darkred(but3)
        }
        if (but4_select != "buy") {
            but4_select = false
            color_darkred(but4)
        }
        if (but5_select != "buy") {
            but5_select = false
            color_darkred(but5)
        }
        
        
        clearInterval(timerinterval)
        t = 300
        minutes = Math.floor(t/60)
        seconds = t % 60
        if (seconds < 10 ) {
            timer.textContent = "0" + minutes + ":" + "0" + seconds
        } else {
            timer.textContent = "0" + minutes + ":" + seconds
        }

    }

    but1.addEventListener('click', function()
        {
        if (but1_select == false) {
            color_green(but1)
            but1_select = true
        } else {
            color_darkred(but1)
            but1_select = false
        }
    
    })
    but2.addEventListener('click', function(){
        if (but2_select == false) {
            color_green(but2)
            but2_select = true
        } else {
            color_darkred(but2)
            but2_select = false
        }
    
    })

    but3.addEventListener('click', function(){
        if (but3_select == false) {
            color_green(but3)
            but3_select = true
        } else {
            color_darkred(but3)
            but3_select = false
        }
    
    })
    but4.addEventListener('click', function(){
        if (but4_select == false) {
            color_green(but4)
            but4_select = true
        } else {
            color_darkred(but4)
            but4_select = false
        }
    
    })
    but5.addEventListener('click', function(){
        if (but5_select == false) {
            color_green(but5)
            but5_select = true
        } else {
            color_darkred(but5)
            but5_select = false
        }
    
    })
    
})

buy.addEventListener('click', function(){
    if (but1_select == true) {
        but1.style.background = "gray"
        but1_select = "buy"
    }
    if (but2_select == true) {
        but2.style.background = "gray"
        but2_select = "buy"
    }
    if (but3_select == true) {
        but3.style.background = "gray"
        but3_select = "buy"
    }
    if (but4_select == true) {
        but4.style.background = "gray"
        but4_select = "buy"
    }
    if (but5_select == true) {
        but5.style.background = "gray"
        but5_select = "buy"
    }
    else {
        b.textContent = "Забронювати"
        b.style.background = "yellow"
        timer.style.color = "black"
        b.style.color = "black"
        buy.style.opacity = "0"
        clearInterval(timerinterval)
        t = 300
        minutes = Math.floor(t/60)
        seconds = t % 60
        if (seconds < 10 ) {
            timer.textContent = "0" + minutes + ":" + "0" + seconds
        } else {
            timer.textContent = "0" + minutes + ":" + seconds
        }
       
    }
})
