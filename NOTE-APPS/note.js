const fs = require('fs')  
const chalk = require('chalk')
    //declare variable equals to a function
// const getNotes = function () {
//     const getNotes = () => {
//     return 'your notes..'
// }

/// addNote function
// const addNote = function (title, body) {
    const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (notes) {
    //     return notes.title === title
    // })
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
            // PRACTICE debuging with console.log(duplicateNote)
            //console.log(title)
            //Practice with "debugger" and chrome

        //duplicateNotes.length === 0
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//2. create an export and removeNote function from notes.js
                    //function (title) {
const removeNote = (title) => {
    //4. have remove log the title of the note to remove
    // console.log(title)
//5. test the work
//load notes 
    const notes = loadNotes()
    //create and array of the note to keep
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    //         })
        //add conditional if
    if (notes.length > notesToKeep.length) {
        //console log note remove
        console.log(chalk.green.inverse('note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('Not note found!'))
    }

}


//create list function 
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('your notes'))

    notes.forEach((note) => {
       console.log(note.title) 
    })
}

//create function read
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
console.log(chalk.inverse(note.title))
console.log(note.body)

    } else {
        console.log(chalk.red.inverse('Note not Found!!!'))
    }
}

//create saveNotes function
                //function (notes) { 'REPLACED'
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
                                    //dataJsON practice errors for misspelling
}

//create the loadNote function  
            //function () 'REPLACED'
const loadNotes = () => {
try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return  JSON.parse(dataJSON)
} catch (e) {
    return []
}

}

//exporting getNotes
// module.exports = getNotes
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}