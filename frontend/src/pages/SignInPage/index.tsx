import React from "react";
import { RouteComponentProps } from "react-router-dom";

import VKButton from "components/VKButton";

import styles from "./SignInPage.module.scss";
import LayoutDefault from "components/LayoutDefault";

interface IProps extends RouteComponentProps {}

const SignInPage: React.FC<IProps> = (props) => {
  return (
    <LayoutDefault>
      <div className={styles["signin-page"]}>
        <VKButton />
      </div>
    </LayoutDefault>
  );
};

export default SignInPage;
