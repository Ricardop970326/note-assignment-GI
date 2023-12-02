// // const fs = require('fs')
// // // fs.writeFileSync('note.txt', 'This file was created by Ricardo with node.js for the first time!')
// // // 
// // //  Challenge: Append a message to notes.txt
// // //
// // // 1. Use appendFileSync to append to the file
// // fs.appendFileSync('note.txt', ' Ricardo Pena for the first time!');
// // 2. run the script
// //  3. check your work by openning the file and viewing the appen text
//             //require module as the command  
// // const name = require('./utils.js')
// // const firstName = require('./utils.js')
// const add = require('./utils.js') 
// // const name = 'Ricardo'
// const sum = add(4, -2)
// console.log(sum)
// // console.log(firstName)  
/* challenge define and use a function in a new file 
1. create a new file cale note.jf
2. create getNote function that return "your notes..."
3. exports getNotes function
4. from app.js, load in and call the function printing message to console*/


// console.log(validator.isEmail('ricardop.alejandrog@gmail.om'))
//
//challenge use the chalk library in your project
//
//1. install shalk
//2. load chalk into app.js
//3. use it to print the string "succes!" to the console in green
//4.test your work
//
//Bonus: use docs to mess around with opther styles. make the text 
                 //this is for the style color and bold



//                  const msg = getNotes()

// console.log(msg)

//                  //this is for the style color and bold
// const greenMsg = chalk.blue.inverse.bold('Success!')
// console.log(greenMsg)

// console.log(process.argv[2])

// const command = process.argv[2]



// if(command === 'add' ) {
//     console.log('adding note!')
// } else if( command === 'remove') {
//     console.log('remove  note!')

// }

// console.log(process.argv)
// console.log(yargs.argv)

// // list command 

// yargs.command({
//     command: 'list',
//     describe: 'List a note',
//     handler: function () {
//         console.log('Listing all note!')
//     }
// })

// //read comand

// yargs.command({
//     command: 'read',
//     describe: 'Read a note',
//     handler: function () {
//         console.log('Reading the note!')
//     }
// })

// challenge: add two new yargs.strictCommands
// 1. setup command to support 'list' command (print placeholder message for now)
// 2. setup command to support 'read' command (print placeholder message for now)
// 3.test for running both commands



//costimazing yargs
yargs.version('17.7.2')



// //challenge: add an option to yargs
// //

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//       //adding builder
//       builder: { 
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//             ////1. setup a body option for the add command
//     body:   {
//         describe: 'Note body',
//         //2. configure a description, make it required, and for it to be a string
//         demandOption: true,
//         type: 'string'
//       }
//     },
//     handler: function (argv) {
//         console.log('Title: ' + argv.title)
// //3. log the body value in the handler function
//         console.log('Body: ' + argv.body)
// //4. test the work
//     }
// })
