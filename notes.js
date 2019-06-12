const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=> {

    return 'Your notes...'
}

const addNote = (title, body)=> {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.red('Note title taken!'))
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
const removeNote =  (title)=> {
    const notes = loadNotes()
    const val=notes.filter((note)=>note.title===title)
    if(val.length === 0)
    {
        console.log(chalk.red('Such Node is not present\n'))
    }else{
        const removedData=notes.filter(function(note){
            return note.title!=title
        })
        console.log(JSON.stringify(removedData));
        saveNotes(removedData)
        console.log(chalk.green('Changes are been made\n'))
    }
}
const listNotes = ()=>{
    const notes=loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}
const readNote=(title)=>{
    const notes=loadNotes()
    //const Data=notes.filter((note)=>note.title===title)
    const Data=notes.find((note)=>note.title===title)
    if(!Data)
    {
        console.log(chalk.red('Note with '+title+' not found!'));
    }else{
        console.log(chalk.green('Note with '+title+' has descriptions as '+Data.body));
    }
//can use debugger with inspect
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}