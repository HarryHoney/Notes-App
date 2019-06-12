const tasks = {
    tasks:[{
        text: 'Grocery',
        completed:true
    },
    {
        text: 'Clean Yard',
        completed:false
    },
    {
        text: 'Film Course',
        completed:false
    }
],
getTasksToDo(){
    tasks.tasks.forEach(element => {
        if(element.completed===false)
        console.log(element.text+'\n')
    });
}
}
tasks.getTasksToDo()