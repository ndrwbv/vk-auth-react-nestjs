import { observable, decorate } from "mobx";

import { RequestState } from "types/RequestState";

export interface IUser {
  id: number;
  email: string;
  grant: number;
  name: string;
  token: string;
  avatar_url: string | null;
}

class UserStore {
  user: IUser = null;
  state = RequestState.PENDING;

  loginVk = (code: string) => {
    this.state = RequestState.LOADING;

    return fetch(`${process.env.REACT_APP_API_HOST}/auth/login/vk`, {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        switch (res.status) {
          case 200:
          case 201:
            return res.json();
          default:
            this.setError();
            return Promise.reject();
        }
      })
      .then((user) => this.setUser(user));
  };

  getProfile = () => {
    this.state = RequestState.LOADING;
    const token = sessionStorage.getItem("token");

    if (!token) Promise.reject();

    return fetch(`${process.env.REACT_APP_API_HOST}/users/profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        switch (res.status) {
          case 200:
          case 201:
            return res.json();
          default:
            this.setError();
            return Promise.reject();
        }
      })
      .then((user) => this.setUser(user));
  };

  logout = () => {
    this.user = null;
    sessionStorage.clear();
    this.state = RequestState.PENDING;
  };

  setUser = (user: IUser) => {
    this.user = user;
    this.state = RequestState.SUCCESS;

    if (user["token"]) {
      sessionStorage.setItem("token", user.token);
    }
  };

  setError = () => {
    this.state = RequestState.ERROR;
  };
}

decorate(UserStore, {
  user: observable,
  state: observable,
});

export default new UserStore();
