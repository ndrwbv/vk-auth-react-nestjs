import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from "pages/404";
import SignInPage from "pages/SignInPage";
import UserPage from "pages/UserPage";
import HomePage from "pages/HomePage";

interface IProps {}

const App: React.FC<IProps> = () => {
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
};

export default App;
