let userFlavors = prompt("Enter Your Order");

const froyo = {
  chocolate: 0,
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
};

console.log(froyo);

function froyoFlavors() {
  const order = userFlavors.split(",").map(flavor => flavor.trim());

  order.forEach((flavor) => {
    if (froyo[flavor] !== undefined) {
      froyo[flavor]++;
    } else {
      froyo[flavor] = 1;
    }
  });

  console.log(froyo);

  // console.table(froyo.flavors);
  //   const orderArray = userFlavors.split(",");
  //   for (let index = 0; index < orderArray.length; index++) {
  //     if (orderArray[index] == "chocolate") {
  //       froyo.chocolate++;
  //     } else if (orderArray[index] == "strawberry") {
  //       froyo.strawberry++;
  //     } else if (orderArray[index] == "vanilla") {
  //       froyo.vanilla++;
  //     } else if (orderArray[index] == "coffee") {
  //       froyo.coffee++;
  //     }

  //   }
  //   console.table(froyo);
  //   addFlavor();
}


froyoFlavors();


