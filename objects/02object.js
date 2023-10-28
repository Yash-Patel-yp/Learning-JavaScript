// const tinderUser = new object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.idLoggedIn = false

// console.log(tinderUser);



// ----------------------------

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);
