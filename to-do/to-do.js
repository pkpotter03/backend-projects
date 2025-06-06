const { log } = require('console');
const fs = require('fs');
const filePath = "./tasks.json";

const loadTask = () => {
    try {

        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (error) {
        return [] 
    }
}

const saveTask = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTask()
    tasks.push({task})
    saveTask(tasks)
    console.log("sucessfully added: ", task);
}

const listTask = () => {
    const tasks = loadTask()
    tasks.forEach((task, index) => {
        console.log(`${index+1} - ${task.task}`);
    });
}

const removeTask = (targetIndex) => {
    let tasks = loadTask()
    tasks = tasks.filter((task, index) => index !== targetIndex-1)
    saveTask(tasks)
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === 'add'){
    addTask(argument)
}else if(command === 'list'){
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("command not found.")
}