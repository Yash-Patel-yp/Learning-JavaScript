let mydate = new Date() // date is object in javascript
console.log(mydate.toString());

console.log(mydate.toDateString());
console.log(mydate.toLocaleString());


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate);

//another way

 let myCreateeDate = new Date("10-19-2023")
 console.log(myCreateeDate.toLocaleString());


//Time Stamp

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


//important method

newDate.toLocaleString('default', {
    weekday:"long",
    
})