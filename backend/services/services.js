const Task = require('../models/model');

// Debug to see what's happening
console.log('Loading services...');
console.log('Task type:', typeof Task);
console.log('Task.find exists:', typeof Task?.find === 'function');

exports.getAllTasks = async() => {
    try {
        return await Task.find();
    } catch (error) {
        console.error('Error in getAllTasks service:', error);
        throw error;
    }
}
exports.createTask = async(task)=>{
    try{
        const newtask = new Task({
            title:task.title,
            description:task.description,
            completed : task.completed,
            createdAt : task.createdAt,
            priority : task.priority    
        });
        const saveTask = await newtask.save();
        return saveTask
    }catch(error){
        throw new error(`Error creating task: ${error.message}`)
    }
}
exports.completed = async()=>{
    try{
        return await Task.find({completed: true})
    }catch(error){
        console.error(`Error ${error.message}`)
    }
}