import { memo, useState } from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  const { onChange, error,defaultValue } = props;
  const [value, setValue] = useState(defaultValue?defaultValue:"");
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
