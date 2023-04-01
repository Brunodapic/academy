import { memo, useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button";
import styles from "./Create.module.css";
import Input from "../../components/Input";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const Create = () => {
  const location = useLocation();
  const { robotId } = useParams();
  const [currentRobot, setCurrentRobot] = useState(0);
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const robots = [
    "/robot-1.svg",
    "/robot-2.svg",
    "/robot-3.svg",
    "/robot-4.svg",
    "/robot-5.svg",
    "/robot-6.svg",
    "/robot-7.svg",
    "/robot-8.svg",
    "/robot-9.svg",
    "/robot-10.svg",
  ];

  /*
  const fetchLoadRobotId = async () => {
    try {
      console.log("api/robot/"+robotId)
      const url = "api/robot/id/"+robotId
      const data = await axios.get(url);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
*/
  useEffect(() => {
    if (location.state) {
      setCurrentRobot(location.state.robotType);
    }
  }, [robotId, location.state]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      if (robotId) {
        const data = {
          robotId,
          name,
          type: currentRobot,
        };


        const response= await axios.put("api/robot/update",{ robotId,name, type: currentRobot });

        
        //const response= await axios.put("http://localhost:3001/api/robot/update",{ robotId,name, type: currentRobot });
        /*const response = await fetch("api/robot/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });*/
        console.log(response)
      } else {
        await axios.post("api/robot/create", { name, type: currentRobot });
      }
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.robotContainer}>
        <img className={styles.robot} src={robots[currentRobot]} alt="robot" />
      </div>
      <div className={styles.buttonContainer}>
        {robots.map((url, index) => {
          return (
            <Button
              key={url}
              label={index + 1}
              onClick={() => setCurrentRobot(index)}
            />
          );
        })}
      </div>
      <Input
        error={error}
        defaultValue={location.state ? location.state.robotName : ""}
        onChange={(value) => {
          setName(value);
          setError(false);
        }}
      />
      <Button
        type="submit"
        onClick={onSubmit}
        label={location.state ? "Update" : "Submit"}
      />
    </form>
  );
};

export default memo(Create);
