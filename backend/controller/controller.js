const service = require('../services/services')

exports.getAllTasks  = async(req,res)=>{
    try{
        const tasks = await service.getAllTasks();
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({"Error":error.message})
    }
}
exports.createTask = async(req,res)=>{
    try{
        const tasks = req.body;
        const newTask = await service.createTask(tasks);
        res.status(200).json(newTask);
    }catch(error){
        res.status(500).json({"Error":error.message})
    }
}
exports.completed= async(req,res)=>{
    try{
        const tasks = await service.completed();
        res.status(200).json(tasks)
    }catch(error){
        res.status(500).json({"Error":error.message})
    }
}
