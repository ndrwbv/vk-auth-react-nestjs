import React from "react";

import LayoutDefault from "components/LayoutDefault";

import styles from "./LayoutUser.module.scss";

interface IProps {}

const LayoutUser: React.FC<IProps> = (props) => {
  return (
    <LayoutDefault>
      <div className={styles["layout-user"]}>
        {/* <h1 className={styles["layout-user__header"]}>Профиль</h1> */}
        <div className={styles["layout-user__main"]}>
          <div className={styles["layout-user__content"]}>{props.children}</div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default LayoutUser;
