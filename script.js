let userFlavors = prompt("Enter Your Order");

const froyo = {
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    coffee: 0,
};

const orderArray = userFlavors.split(",")
//froyo.flavors = userFlavors



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


// let userResponse = prompt("Enter froyo flavors");

// const froyo = {
//     chocolate: 0,
//     vanilla: 0,
//     strawberry: 0,
//     coffee: 0,
// }

// const orderArray = userResponse.split(",")
// // froyo.flavor = userResponse;

    
//     for (let index = 1; index < orderArray.length; index++) {
//         if (orderArray[index] == "chocolate"){
//             froyo.chocolate ++
//         }        
//     }
//     console.table(froyo);

// const froyo = {
//     flavors: {}
// };

// const order = userResponse.split(",");

// order.forEach(flavor => {
//     if (froyo.flavors[flavor]){
//         froyo.flavors[flavor]++
//     }else {
//         froyo.flavors[flavor] = 1
//     }
// })

// console.table(froyo.flavors);