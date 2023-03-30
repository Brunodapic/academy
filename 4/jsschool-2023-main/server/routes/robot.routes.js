import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';
import {asyncHandler} from '../utils/async.util'

router.get('/', RobotCtrl.getAllRobots);
router.get('/id/:id', RobotCtrl.getRobotById);
router.post('/create', asyncHandler(RobotCtrl.create));
router.put('/update', asyncHandler(RobotCtrl.updateRobot));

export default router;
