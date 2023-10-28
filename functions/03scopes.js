//  let a = 300
//  if (true) {
//     let a = 10
//     const = 20
//  }


// scope using function

 function one() {
    const username = "Yash"

    function two() {
        const website = "youtube"
        console.log(username);   
     }

    //  console.log(website);

    two()

    
 }

 one()



 // if 

 if (true) {
    const username = "Yash"
    if (username === "Yash") {
        const website = " Youtube"
        console.log(username + website);        
    }

    // console.log(website);

     
 }


 //intresting

// console.log(addone(5));  >>>>> it will run properly


 function addone(num) {
    return num + 1
 }

//  addone(5)



// console.log( addtwo(5)); >>>>>>>  it will give error


 const addtwo = function num(num) {
    return num + 2
 }

//  addtwo(5)