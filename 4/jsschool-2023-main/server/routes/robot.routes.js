import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';
import {asyncHandler} from '../utils/async.util'

router.get('/', asyncHandler(RobotCtrl.getAllRobots));
router.get('/id/:id', asyncHandler(RobotCtrl.getRobotById));
router.post('/create', asyncHandler(RobotCtrl.create));
router.put('/update', asyncHandler(RobotCtrl.updateRobot));

export default router;
