import React from "react";

import Slider from "components/slider/Slider";
import { useGlobalDrawer } from "recoil/atom/globalDrawer";
import DrawerContentsLayout from "../../drawer/drawer/DrawerContentsLayout";

interface Props {}

const DateFilterDrawer: React.FC<Props> = () => {
  const { closeGlobalDrawer } = useGlobalDrawer();

  return (
    <DrawerContentsLayout title={"연도"} handleClose={closeGlobalDrawer}>
      {/* TODO : min => earliest year of md files , max => new Date().getFullYear */}
      <Slider min={2022} max={2024} />
    </DrawerContentsLayout>
  );
};

export default DateFilterDrawer;
