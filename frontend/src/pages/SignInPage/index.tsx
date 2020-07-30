import React from "react";

import VKButton from "components/VKButton";
import LayoutDefault from "components/LayoutDefault";

import styles from "./SignInPage.module.scss";

const SignInPage: React.FC = () => {
  return (
    <LayoutDefault>
      <div className={styles["signin-page"]}>
        <VKButton />
      </div>
    </LayoutDefault>
  );
};

export default SignInPage;
