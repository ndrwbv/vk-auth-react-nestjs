import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "pages/404";
import SignInPage from "pages/SignInPage";
import UserPage from "pages/UserPage";
import HomePage from "pages/HomePage";

import { RequestState } from "types/RequestState";

import { useStores } from "stores/useStores";

interface IProps {}

const App: React.FC<IProps> = observer(() => {
  const { user, state, getProfile } = useStores()["UserStore"];

  React.useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!user && state !== RequestState.LOADING && token) {
      getProfile().catch(console.log);
    }
  }, [user, state, getProfile]);

  // if (state === RequestState.LOADING) return <p>Loading..</p>;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/user" component={UserPage} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
});

export default App;
