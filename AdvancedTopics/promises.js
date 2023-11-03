const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("async task is complete");
        resolve()
    }, 1000);
    
})

promiseOne.then(()=> {
    console.log("Promise consumed");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("async 2 resolved");
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username: "Yash", email: "yash@gmail.com"})
    }, 1000);
})


promiseThree.then((user)=>{
    console.log(user);

})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username: "Yash", email: "yash@gmail.com"})
        }else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('The promise either resolved or rejected');
})

promiseFive((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error){
            resolve({username: "Nayan", email: "nayan@gmail.com"})
        } else {
            reject('ERROR: Went wrong')
        }
    }, 1000);

})

async function consumePromiseFive(){
    const responce = await promiseFive
    console.log(responce);
}