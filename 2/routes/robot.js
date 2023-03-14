var express = require("express");
var router = express.Router();
const Robot = require("../model/Robot");
const { onlyLettersAndNumbers } = require("../validationFunctions/index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const q = req.query.name;
  if (q) {
    res.json({ type: "Robot", name: q ? q : "" });
  } else {
    res.json({ type: "Robot", name: "" });
  }
});

router.post("/new", async function (req, res, next) {
  //ts->  const robotData: CreateUserDto = req.body
  const robotData = req.body;
  try {
    if(onlyLettersAndNumbers(robotData.name)) {
      /*const createRobotData = {
        name: robotData.name,
      };
      */
      //const createRobot = await Robot.create({ name:id });
      const createRobot = await Robot.create({ name:robotData.name });

      res.json({createRobot})
    }else{
      res.status(422).send("username can only have letters and numbers");
    }
  } catch (error) {
    //mozda nije najbolje slati error na frond ali sta se moze
    res.sendStatus(400).send(error)
  }
});

router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  console.log(id);
  const findeRobot = await Robot.findOne({ _id: id });

  if (!findeRobot) {
    res.sendStatus(404);
  } else {
    res.json({ findeRobot });
  }
});

//test route for fetching via ID
router.get("/id/:id", async function (req, res, next) {
  const id = req.params.id;
  console.log(id);
  const findeRobot = await Robot.findById(id);

  if (!findeRobot) {
    res.sendStatus(404);
  } else {
    res.json({ findeRobot });
  }
});

module.exports = router;
