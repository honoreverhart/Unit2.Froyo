let userFlavors = prompt("Enter Your Order");

const froyo = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
};

const orderArray = userFlavors.split(",")




for (let index = 0; index < orderArray.length; index++) {
    if (orderArray[index] == "chocolate") {
       froyo.chocolate ++
    } else if (orderArray[index] == "strawberry"){
        froyo.strawberry ++
    }else if (orderArray[index] == "vanilla"){
        froyo.vanilla ++
    }else if (orderArray[index] == "coffee"){
        froyo.coffee ++
    }
}




console.table(froyo)

//Other Option

// const order = userResponse.split(",");

// order.forEach(flavor => {
//     if (froyo.flavors[flavor]){
//         froyo.flavors[flavor]++
//     }else {
//         froyo.flavors[flavor] = 1
//     }
// })

// console.table(froyo.flavors);