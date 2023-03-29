import { memo, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import styles from "./Create.module.css";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [currentRobot, setCurrentRobot] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await axios.post("api/robot/create", { name, type: currentRobot });
      navigate('/')
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
        onChange={(value) => {
          setName(value);
          setError(false);
        }}
      />
      <Button type="submit" onClick={onSubmit} label={"Submit"} />
    </form>
  );
};

export default memo(Create);
