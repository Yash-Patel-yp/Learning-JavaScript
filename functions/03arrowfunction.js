const user = {
    username: "Yash",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website` ) ;

    }
 
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//This in function 

// const chai = function () {
//     let username = "Yash"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Yash"
    console.log(this);
    
}

chai()


// arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4, 5));


// Another way to write arrow fuction

const addtwo = (num1, num2) => num1 + num2

//>>> Another way

// const addtwo = (num1, num2) => (num1 + num2 )