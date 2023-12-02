 const fs = require('fs')
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





//challenge: work with JSON and the file system
//
//1. load and parse JSON data
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
//2. change the name and age property using your info
data.name = 'Alejandro'
data.age = 26
//3. stringify the vhanged object and overwrite the original data
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)
//4. test your work
