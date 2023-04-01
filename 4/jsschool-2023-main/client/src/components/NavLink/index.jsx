import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = (props) => {
  const { label, to } = props;

  return (
    <Link className={styles.label} to={to}>
      {label}
    </Link>
  );
};

export default memo(NavLink);
