import { memo, useState, useEffect } from "react";
import axios from "axios";
import Robot from "../../components/Robot";

const Home = () => {
  const [robots, setRobots] = useState([]);

  const fetchLoadData = async () => {
    try {
      const data = await axios.get("api/robot/");
      setRobots(data.data);
    } catch (error) {
      console.log(true);
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
        />
      ))}
    </div>
  );
};

export default memo(Home);
