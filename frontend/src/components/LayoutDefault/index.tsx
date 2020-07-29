import React from "react";

import styles from "./LayoutDefault.module.scss";
import { Link } from "react-router-dom";
import { IUser } from "stores/UserStore";
import { useStores } from "stores/useStores";

const LayoutDefault: React.FC = (props) => {
  const user: IUser = useStores()["UserStore"].user;

  return (
    <div className={styles["layout-default"]}>
      <div className={styles["layout-default__links"]}>
        <Link to="/">Главная</Link>
        {user ? (
          <Link to="/user">Мой профиль</Link>
        ) : (
          <Link to="/user">Войти</Link>
        )}
      </div>
      <div className={styles["layout-default__content"]}>{props.children}</div>
    </div>
  );
};

export default LayoutDefault;
