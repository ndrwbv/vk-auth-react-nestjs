import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

interface IProps {}
const NotFound: React.FC<IProps> = () => {
  return (
    <div className={styles["page"]}>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;
