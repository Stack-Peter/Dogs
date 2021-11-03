import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://beacons.page/ferreira_pedro">
        <Dogs />
        <p>Dogs. Alguns direitos reservados</p>
      </a>
    </footer>
  );
};

export default Footer;
