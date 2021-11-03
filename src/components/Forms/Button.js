import React from "react";
import { UserContext } from "../../UserContext";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  const { weakPass } = React.useContext(UserContext);

  if (weakPass) {
    return (
      <button {...props} disabled className={styles.buttonD}>
        {children}
      </button>
    );
  }
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
