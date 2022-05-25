import React from "react";

import FilterButton from "components/common/button/FilterButton";

import { useGlobalDrawer } from "recoil/atom/drawer/globalDrawer";
import DateFilterDrawer from "./DateFilterDrawer";

interface Props {}

const DateFilter: React.FC<Props> = () => {
  const { openGlobalDrawer } = useGlobalDrawer();

  const handleClick = () => {
    openGlobalDrawer({
      component: DateFilterDrawer,
    });
  };

  return (
    <>
      {/* TODO : Change label to value */}
      <FilterButton title="연도" label="2022" onClick={handleClick} />
    </>
  );
};

export default DateFilter;
