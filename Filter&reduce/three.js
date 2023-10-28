const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// const myTotal = myNums.reduce( (acc, currentvalue) => {
//     return acc + currentvalue
// }, 0)

// or

const myTotal = myNums.reduce( (acc, currentvalue) => acc+currentvalue, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 4999
    },
    {
        itemName: "Python Course",
        price: 5999
    },
    {
        itemName: "java Course",
        price: 6999
    },
    {
        itemName: "data science Course",
        price: 7999
    }
]

const pricetoPay = shoppingCart.reduce( (acc, item) => acc+item.price, 0)

console.log(pricetoPay);
