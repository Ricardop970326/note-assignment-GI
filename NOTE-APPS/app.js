// const validator = require('validator')
///declare variableconst getNotes = require('./note.js')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./note.js')

//costimazing yargs
yargs.version('17.7.2')



//creating the add command
//
yargs.command({
    command: 'add',
    describe: 'Add a new note',
      //adding builder
      builder: { 
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
            ////1. setup a body option for the add command
    body:   {
        describe: 'Note body',
        //2. configure a description, make it required, and for it to be a string
        demandOption: true,
        type: 'string'
      }
    },
    // handler: function (argv)
    handler(argv) {
//         console.log('Title: ' + argv.title)
// //3. log the body value in the handler function
//         console.log('Body: ' + argv.body)
// //4. test the work
        notes.addNote(argv.title, argv.body)
    }
})


//creating the remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        // cahllenge setup command option and function
//
//1. setup remove command to take required "--title" option
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function (argv) {
    handler(argv) {
        // 3. call removeNote in remove command handler
        notes.removeNote(argv.title)
        // console.log('Removing a note!')
    }
})


// list command 

yargs.command({
    command: 'list',
    describe: 'List a note',
    // handler: function () {
    handler() {
        // console.log('Listing all notes!')
        //cal notes
        notes.listNotes()
    }
})

//read comand
yargs.command({
    command: 'read',
    describe: 'Read a note',
    //seting up builder
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    // handler: function () {
    handler(argv) {
        // console.log('Reading the notes!')
        // call on the readNote
        notes.readNote(argv.title)
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()





