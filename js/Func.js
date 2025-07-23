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

   if ( Successful != undefined) {

     formbox.innerHTML = SignIn(getData.email, getData.password)
    
   } 
   
   

//     if (SignIn(getData.email, getData.password)==="undefined") {
//         alert("Not Found")
        
//     }
}

// login.onclick = SendData



function SignIn(email, password) {

   try {
     for (let index = 0; index <= Engineers.length; index++) {
        const element = Engineers[index]

        if (element.email === email && element.password === password) {

            // console.log("true")
            // alert("Login Successful")
            
            return `<h3 style=" color:yellow;font-size:45px;">Login Successful!!! <br> Welcome ${element.name}</h3>`
        
        } 
    }
    
   } catch (error) {
        alert("Login Failed")
   }


// for (let index = 0; index <= Engineers.length; index++) {
//         const element = Engineers[index]

//         if (element.email === email && element.password === password) {

//             // console.log("true")
//             // alert("Login Successful")
            
//             return `<h3 style=" color:yellow;font-size:45px;">Login Successful!!! <br> Welcome ${element.name}</h3>`
        
//         } 
//     }


} 

let Products = [
    {
        image:"redbull.jpg",
        name: "NIKE AIR",
        price: 300,
        colour: "Black"
    }, {
        image:"redbull.jpg",
        name: "NIKE AIR",
        price: 300,
        colour: "Black"
    }, {
        image:"redbull.jpg",
        name: "NIKE AIR",
        price: 300,
        colour: "Black"
    }, {
        image:"redbull.jpg",
        name: "NIKE AIR",
        price: 300,
        colour: "Black"
    }
]
// var content = document.getElementById("content");
// let children = document.createElement("div")


// Products.forEach(sell => {
//     children.innerHTML = `<div class="big-box" id="content">
//             <img src="images/${sell.image}" width="100%" height="50%">
//             <h2>${sell.name}</h2>
//             <h2>Ghc${sell.price}</h2>
//             <h2>${sell.colour}</h2>
//         </div>`
    
//         content.appendChild(children)
//         children = document.createElement("div")
// })


// for (let index = 0; index < Products.length; index++) {
//     const sell = Products[index];

//      children.innerHTML = `<div class="big-box" id="content">
//             <img src="images/${sell.image}" width="100%" height="50%">
//             <h2>${sell.name}</h2>
//             <h2>Ghc${sell.price}</h2>
//             <h2>${sell.colour}</h2>
//         </div>`
    
//         content.appendChild(children)
//         children = document.createElement("div")
    


// }


// index = 0; 
// while (index < Products.length) {

//     const sell = Products[index];


//      children.innerHTML = `<div class="big-box" id="content">
//             <img src="images/${sell.image}" width="100%" height="50%">
//             <h2>${sell.name}</h2>
//             <h2>Ghc${sell.price}</h2>
//             <h2>${sell.colour}</h2>
//         </div>`
    
//         content.appendChild(children)
//         children = document.createElement("div")

//         index++
// }


let Phoneshop = [
    {
        image:"ip16black.jpg",
        name:"Apple iPhone 16, Space Black - Unlocked(Renewed)",
        storage:"256gb 8gb",
        colour:"Black",
        price:"Ghc15,000"
    },{
        image:"ip15pink.jpg",
        name:"Apple iPhone 15 plus, Pink - Unlocked",
        storage:"256gb 8gb",
        colour:"Black",
        price:"Ghc13,000"
    },{
        image:"ip14black.jpg",
        name:"Apple iPhone 14, Black - Refurbished",
        storage:"256gb 8gb",
        colour:"Black",
        price:"Ghc11,000"
    },{
        image:"ip13promaxgreen.jpg",
        name:"Iphone 13 pro max,Titanium Green - Unlocked",
        storage:"256gb 8gb",
        colour:"Titanium Green",
        price:"Ghc9,000"
    },{
        image:"ip15pink.jpg",
        name:"Iphone 12",
        storage:"256gb 8gb",
        colour:"Black",
        price:"Ghc7,000"
    }
]

var phone_row = document.getElementById("phone_row");
let children = document.createElement("div")

for (let index = 0; index < Phoneshop.length; index++) {
    const phone = Phoneshop[index];

    children.innerHTML=`<div class="phone-box">
                <img src="/images/${phone.image}">
                <div class="txt-area">
                    <h2>${phone.name}</h2>
                    <span id="opt">Storage: <span>${phone.storage}</span></span>
                    <h2><span id="opt">colour: </span>${phone.colour}</h2>
                    <h2><span id="opt">Price: </span>${phone.price}</h2>
                </div>
            </div>`
    
    phone_row.appendChild(children)
    children = document.createElement("div")
}