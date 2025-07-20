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
        name: "Michelle",
        email: "Michelle@gmail.com",
        password: "Michelle12345"
    }, {
        name: "Michael",
        email: "Michael@gmail.com",
        password: "Michael12345"
    }, {
        name: "Mark",
        email: "Mark@gmail.com",
        password: "Mark12345"
    }, {
        name: "George",
        email: "George@gmail.com",
        password: "George12345"
    }
]
console.log(Engineers)

let form = document.getElementById('form');
let login = document.getElementById('login');

function SendData(event) {


    event.preventDefault();
    let formData = new FormData(form)       // [new FormData(id of the form)] this is a constant used in storing incoming data
    let getData = Object.fromEntries(formData.entries())    //Object.fromEntries reps received data /formData reps stored data

    console.log(getData.email)
    console.log(getData.password)

    let Successful = SignIn(getData.email, getData.password)

   if ( Successful = undefined) {

     formbox.innerHTML = SignIn(getData.email, getData.password)
    
   } else {

     alert("Login Failed")
    
   }
   

    // if (SignIn(getData.email, getData.password)==="undefined") {
    //     alert("Not Found")
        
    // }
}

login.onclick = SendData



// function SignIn(email, password) {

//    try {
//      for (let index = 0; index <= Engineers.length; index++) {
//         const element = Engineers[index]

//         if (element.email === email && element.password === password) {

//             // console.log("true")
//             // alert("Login Successful")
            
//             return `<h3 style=" color:yellow;font-size:45px;">Login Successful!!! <br> Welcome ${element.name}</h3>`
        
//         } 
//     }
    
//    } catch (error) {
//         alert("Login Failed")
//    }




// } 

for (let index = 0; index <= Engineers.length; index++) {
        const element = Engineers[index]

        if (element.email === email && element.password === password) {

            // console.log("true")
            // alert("Login Successful")
            
            return `<h3 style=" color:yellow;font-size:45px;">Login Successful!!! <br> Welcome ${element.name}</h3>`
        
        } 
    }
