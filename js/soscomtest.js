let startbox = document.getElementById('startbox')
let startbox1 = document.getElementById('startbox1')
const loginform = document.getElementById('loginform')
const registerform = document.getElementById('registerform')
let gotoregister = document.getElementById('gotoregister')
let gotologin = document.getElementById('gotologin')

startbox.onclick = function (){

    loginform.classList.toggle('swapDisplay')
    registerform.classList.remove('swapDisplay')
}
startbox1.onclick = function (){

    loginform.classList.toggle('swapDisplay')
    registerform.classList.remove('swapDisplay')
}
gotoregister.onclick = function (){

    loginform.classList.remove('swapDisplay')
    registerform.classList.add('swapDisplay')
    
}
gotologin.onclick = function (){

    registerform.classList.remove('swapDisplay')
    loginform.classList.add('swapDisplay')
}

