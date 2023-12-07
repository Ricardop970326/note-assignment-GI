//  const fs = require('fs')
//  const book = {
//     title: 'Ego is the enemy',
//     Author: 'Ryan Holyday'
//  }

//  const bookJSON = JSON.stringify(book)
//  fs.writeFileSync('1-json.json', bookJSON)
// //  console.log(bookJSON)

//  const parseData = JSON.parse(bookJSON)

//  console.log(parseData.author)

// const dataBuffer = fs.readFileSync('1-json.json')
// // console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)





// //challenge: work with JSON and the file system
// //
// //1. load and parse JSON data
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// //2. change the name and age property using your info
// data.name = 'Alejandro'
// data.age = 26
// //3. stringify the vhanged object and overwrite the original data
// const userJSON = JSON.stringify(data)
// fs.writeFileSync('1-json.json', userJSON)
// //4. test your work
// const recipeData = {
//     "id": "123",
//     "title": "Pasta Carbonara",
//     "ingredients": [
//       {
//         "name": "Pasta",
//         "quantity": "200g"
//       },
//       {
//         "name": "Bacon",
//         "quantity": "100g"
//       },
//       {
//         "name": "Eggs",
//         "quantity": "2"
//       }
//     ],
//     "instructions": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   };

//   const bacon = recipeData.ingredients[1]
// console.log(bacon)


// const productData = {
//     "id": "987654",
//     "name": "Smartphone",
//     "price": 499.99,
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "reviews": [
//       {
//         "id": "1",
//         "author": "John Doe",
//         "rating": 5,
//         "comment": "Great phone!"
//       },
//       {
//         "id": "2",
//         "author": "Jane Smith",
//         "rating": 4,
//         "comment": "Good value for money."
//       }
//     ],
//     "variants": [
//       {
//         "id": "1",
//         "color": "Black",
//         "storage": "64GB"
//       },
//       {
//         "id": "2",
//         "color": "White",
//         "storage": "128GB"
//       }
//     ]
//   };
  
//   console.log(productData);


//   function colors(productData) {
//     let variant = productData.variants
//     let col = [];
//     for(let i = 0; i < variant.length; i++) {
//         if(variant[i] > 100) {
//           col += variant[i]
//         }

//     }
//         return col;
//   };

//   console.log(color);


// const bigStorage2 = function (obj) {
//     let newArr = [];
//     const variants = obj.variants;
//     variants.forEach((x) =>
//       parseFloat(x.storage) >= 100 ? newArr.push(x.id) : x
//     );
//     return newArr;
//   };
//   console.log(bigStorage2(productData));



  /
