const numberArrays = [2, 4, 6, 8, 10, 12];

numberArrays.unshift(numberArrays.pop(2, 4, 6, 8, 10, 12));

// console.log(numberArrays)

const array=[

    {
        productTitle: "macbookAir",
        productPrice: 1000
    },

    {
        productTitle: "lenovoIdeapad",
        productPrice: 1100
    },

    {
        productTitle: "asusRogStrix",
        productPrice: 1200
    }
]

// console.log(array);

const Numbers= [1, 2, 3, 4, 5];

const average = Numbers.reduce((a, b) => a + b, 0) / Numbers.length;

// console.log(average);

const shop = {

    proporties:{
     phoneName:  `xiaomi`,
     phoneDescription: `strong`,
     phonePrice: 1000,
     shopAddresses: `georgia, tbilisi zoomer`,
     phoneMemoryInGB: 256,
    }

}

// console.log(
//     `phone name is `
//      + 
//      shop.proporties.phoneName
//      +
//      ` ,hone price is `
//      +
//      shop.proporties.phonePrice
//      +
//      ` and you can buy it at `
//      +
//      shop.proporties.shopAddresses
// )

