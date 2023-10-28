const coding = ["js", "ruby", "java", "pyhton", "cpp"]


// const values = 



// Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => { // we can also use ( num > 5 ) without {} scope and return
    return num > 5
})

//console.log(newNums);


const anotherNums = []

myNums.forEach( (num) => {
    if(num > 4) {
        anotherNums.push(num)
    }
})

console.log(anotherNums);


 