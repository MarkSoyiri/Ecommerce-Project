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


let solution = document.getElementById('solution')
let solution_dropdown = document.getElementById('solution_dropdown')
let navy = document.getElementById('navy')


navy.onclick = function(){
    navy.classList.add('nav_back')
}



solution.onclick = function (){
    // solution_dropdown.classList.remove('pos')

    whatsnew_dropdown.classList.remove('drop')
    resource_dropdown.classList.remove('drop')
    
    solution_dropdown.classList.toggle('drop')
    
    console.log(navy.classList.toggle('nav_back'))
}



let resource = document.getElementById("resource")
let resource_dropdown = document.getElementById("resource_dropdown")

resource.onclick = function (){

    
    
    solution_dropdown.classList.remove('drop')
    whatsnew_dropdown.classList.remove('drop')
    resource_dropdown.classList.toggle('drop')
    
    navy.classlist.toggle('navy_back')
}

let whatsnew = document.getElementById("whatsnew")
let whatsnew_dropdow = document.getElementById("whatsnew_dropdow")

whatsnew.onclick = function (){

    
    solution_dropdown.classList.remove('drop')
    resource_dropdown.classList.remove('drop')
    whatsnew_dropdown.classList.toggle('drop')

    // navy.classlist.toggle('navy_back')

}

console.log('')
