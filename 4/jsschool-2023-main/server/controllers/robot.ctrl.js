import Robot from '../models/robot.model';
import {Err} from '../utils/error.util';

export const create = async (req, res) => {
    const { name, type } = req.body;
    if(name===''){
        const error = new Err(400,"name is required")
        throw error;
    }
    const newRobot = new Robot({ name, type });
    const nr= await newRobot.save();
    console.log(nr)
    res.sendStatus(204);
    
}

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();
    res.json(allRobots);
}