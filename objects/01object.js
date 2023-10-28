// litrals are not singleton
// constructor are with singleton


const JsUser = {
    name: "Yash",
    age: 18,
    email: 'yash@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]

}


console.log(JsUser.age);
console.log(JsUser["email"]);


// email change

JsUser.email = "change@gmail.com"

console.log(JsUser.email);

//freeze 

//Object.freeze(JsUser)

JsUser.email = "notchange@gmail.com"
console.log(JsUser.email);


//function in object

JsUser.greeting = function () {
    console.log(`Hello dear friend, ${this.name}`);
}

console.log(JsUser.greeting());
