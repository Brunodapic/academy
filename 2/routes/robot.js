var express = require("express");
var router = express.Router();
const Robot = require("../model/Robot");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const q = req.query.name;
  if (q) {
    res.json({ type: "Robot", name: q ? q : "" });
  } else {
    res.json({ type: "Robot", name: "" });
  }
});

router.post("/:id", async function (req, res, next) {
  const id = req.params.id;
  console.log(id);
  const createRobot = await Robot.create({ name:id });

  res.json({createRobot})
});

router.get("/:id", async function (req, res, next) {
  const id = req.params.id;
  console.log(id);
  const findeRobot = await Robot.findOne({ _id: id })


  if(!findeRobot){
    res.sendStatus(404)
  }else{
    res.json({findeRobot})
  }
});


router.get("/id/:id", async function (req, res, next) {
    const id = req.params.id;
    console.log(id);
    const findeRobot = await Robot.findById(id)
  
  
    if(!findeRobot){
      res.sendStatus(404)
    }else{
      res.json({findeRobot})
    }
  });

module.exports = router;
