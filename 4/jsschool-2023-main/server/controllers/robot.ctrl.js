import Robot from "../models/robot.model";
import { Err } from "../utils/error.util";

export const getRobotById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const findeRobot = await Robot.findById(id);

  if (!findeRobot) {
    res.sendStatus(404);
  } else {
    res.json({ findeRobot });
  }
};

export const getAllRobots = async (req, res) => {
  const allRobots = await Robot.find();
  res.json(allRobots);
};

export const create = async (req, res) => {
  const { name, type } = req.body;
  if (name === "") {
    const error = new Err(400, "name is required");
    throw error;
  }
  const newRobot = new Robot({ name, type });
  const nr = await newRobot.save();
  console.log(nr);
  res.sendStatus(204);
};

export const updateRobot = async (req, res) => {
  console.log(req.body)
  const { robotId, name, type } = req.body;
  if (name === "") {
    const error = new Err(400, "name is required");
    throw error;
  }
  const updateRobot = await Robot.findByIdAndUpdate(robotId, { name, type });
  console.log(updateRobot);
  res.sendStatus(200);
};
