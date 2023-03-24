import { memo } from "react";
import styles from "./Button.module.css";

function Button({ buttonFunction, text }) {
  return (
    <button className={styles.btnAddMinus} onClick={buttonFunction}>
      {text}
    </button>
  );
}

export default memo(Button);
