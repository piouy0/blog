import React from "react";

import { uesGlobalDrawer } from "recoil/atom/globalDrawer";
import Drawer from "./drawer/Drawer";

interface Props {}

const GlobalDrawer: React.FC<Props> = () => {
  const { state: drawer, closeGlobalDrawer } = uesGlobalDrawer();

  const handleClose = () => {
    if (drawer.handleClose) {
      drawer.handleClose();
    }

    closeGlobalDrawer();
  };

  return (
    <Drawer anchor="bottom" open={drawer.open} onClose={handleClose}>
      {drawer.component && <drawer.component {...drawer.componentProps} />}
    </Drawer>
  );
};

export default GlobalDrawer;
