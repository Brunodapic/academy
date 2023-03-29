import { memo, useState } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  const { onChange, error } = props;
  const [value, setValue] = useState("");
  return (
    <input
      className={error ? styles.errors+" "+styles.input:styles.input}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};

export default memo(Input);
