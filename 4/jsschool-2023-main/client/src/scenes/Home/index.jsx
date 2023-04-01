import { memo, useState, useEffect } from "react";
import axios from "axios";
import Robot from "../../components/Robot";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [robots, setRobots] = useState([]);
  const navigate = useNavigate();

  const fetchLoadData = async () => {
    try {
      const data = await axios.get("api/robot/");
      setRobots(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLoadData();
  }, []);

  if (!robots) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {robots.map((robot) => (
        <Robot
          name={`${robot._id}: ${robot.name}`}
          type={robot.type}
          key={robot._id}
          onClick={() => {
            navigate(`update/${robot._id}`, {
              state: { robotName: robot.name, robotType: robot.type },
            });
          }}
        />
      ))}
    </div>
  );
};

export default memo(Home);
