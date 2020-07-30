import React from "react";
import { observer } from "mobx-react";
import { Link, useHistory } from "react-router-dom";

import { useStores } from "stores/useStores";
import { RequestState } from "types/RequestState";

import styles from "./LayoutDefault.module.scss";

const PRIVATE_ROUTES = ["/user"];

const LayoutDefault: React.FC = observer((props) => {
  const { user, state, getProfile, logout } = useStores()["UserStore"];
  let history = useHistory();

  React.useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (PRIVATE_ROUTES.includes(history.location.pathname) && !token)
      return history.push("/signin");

    if (!user && state !== RequestState.LOADING && token) {
      getProfile().catch(() => {
        history.push("/signin");
        logout();
      });
    }
  }, [user, state, getProfile, logout, history]);

  return (
    <div className={styles["layout-default"]}>
      <div className={styles["layout-default__links"]}>
        <Link to="/">Главная</Link>
        {user ? (
          <Link to="/user">Мой профиль</Link>
        ) : (
          <Link to="/signin">Войти</Link>
        )}
      </div>
      <div className={styles["layout-default__content"]}>{props.children}</div>
    </div>
  );
});

export default LayoutDefault;
