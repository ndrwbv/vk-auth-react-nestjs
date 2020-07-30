import React from "react";
import { observer, inject } from "mobx-react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import LayoutUser from "components/LayoutUser";

import { RequestState } from "types/RequestState";
import UserStore from "stores/UserStore";

import styles from "./UserPage.module.scss";

interface IProps extends RouteComponentProps {
  UserStore: typeof UserStore;
}

class UserPage extends React.Component<IProps> {
  componentDidMount() {
    const token = sessionStorage.getItem("token");
    if (!token) return this.props.history.push("/signin");
  }

  handleLogout = () => {
    UserStore.logout();
    this.props.history.push("/");
  };

  render() {
    const { state, user } = this.props.UserStore;

    if (state === RequestState.ERROR) return <p>Erorr</p>;

    if (state !== RequestState.SUCCESS) {
      return (
        <LayoutUser>
          <p>Loading...</p>
        </LayoutUser>
      );
    }

    return (
      <LayoutUser>
        <div className={styles["user-page"]}>
          <img
            src={user.avatar_url}
            alt="vk avatar"
            className={styles["user-page__avatar"]}
          />
          <p className={styles["user-page__name"]}>{user.name}</p>
          <p className={styles["user-page__email"]}>{user.email}</p>
          <button
            onClick={this.handleLogout}
            className={styles["user-page__logout"]}
          >
            Выйти
          </button>
        </div>
      </LayoutUser>
    );
  }
}

export default inject("UserStore")(withRouter(observer(UserPage)));
