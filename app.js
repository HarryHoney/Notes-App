const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs version
yargs.version('13.4.2')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adding your notes',
    builder:{
          title:{describe: 'Note title',
          demandOption: true,
          type: 'string'},
          body:
          {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
          }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log(chalk.blue('Your Notes Are:'))
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{type:'string',
        demandOption:true,
        describe:'Reading data in Title'
    }},
    handler(argv) {
        console.log('Reading a note')
        notes.readNote(argv.title)
    }
})

yargs.parse()