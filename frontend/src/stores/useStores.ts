import { MobXProviderContext } from "mobx-react";
import React from "react";

export function useStores() {
  return React.useContext(MobXProviderContext);
}
