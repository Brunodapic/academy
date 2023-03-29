import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';
import {asyncHandler} from '../utils/async.util'

router.get('/', RobotCtrl.getAllRobots);

router.post('/create', asyncHandler(RobotCtrl.create));

export default router;
