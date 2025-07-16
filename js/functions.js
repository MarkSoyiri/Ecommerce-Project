// // 1.  Anonymous function
// let MyFunction = function (){console.log('Anonymous')} 

// // 2. Arrow Function
// let MyArrowFunction = ()=>{console.log('Arrow')}

// // 3. Named Function
// let NamedFunction = function NameOfFunction9(){console.log('NamedFunction')}

// // Calling A Function

// let run = document.getElementById('run_test')

// run.onclick = MyFunction


let Engineers = [
    {
        name:"Michelle",
        email:"Michelle@gmail.com",
        password:"Michelle12345"
    },{
        name:"Michael",
        email:"Michelle@gmail.com",
        password:"Michael12345"
    },{
        name:"Mark",
        email:"Michelle@gmail.com",
        password:"Mark12345"
    },{
        name:"George",
        email:"Michelle@gmail.com",
        password:"George12345"
    }
]


let form = document.getElementById('form');
let login = document.getElementById('login');

function SendData(event){


event.preventDefault();
let formData = new FormData(form)       // [new FormData(id of the form)] this is a constant used in storing incoming data
let getData = Object.fromEntries(formData.entries())    //Object.fromEntries reps received data /formData reps stored data

console.log(getData.email)
console.log(getData.password)

SignIn(getData.email,getData.password)
}

login.onclick = SendData


function SignIn(p,g){

    alert(p+g)
    
}


