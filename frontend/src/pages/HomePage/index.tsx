import React from "react";
import LayoutDefault from "components/LayoutDefault";

import { useStores } from "stores/useStores";
import { IUser } from "stores/UserStore";

const HomePage = () => {
  const user: IUser = useStores()["UserStore"].user;

  return (
    <LayoutDefault>
      <h1>Home Page</h1>
      {user && <p>О привет, {user.name}</p>}
    </LayoutDefault>
  );
};

export default HomePage;
