import React from "react";

import LayoutDefault from "components/LayoutDefault";

import styles from "./LayoutUser.module.scss";

interface IProps {}

const LayoutUser: React.FC<IProps> = (props) => {
  return (
    <LayoutDefault>
      <div className={styles["layout-user"]}>
        <div className={styles["layout-user__main"]}>
          <div className={styles["layout-user__content"]}>{props.children}</div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default LayoutUser;
