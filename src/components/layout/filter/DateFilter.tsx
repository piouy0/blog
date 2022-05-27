import React, { useMemo } from "react";

import FilterButton from "components/common/button/FilterButton";

import { useGlobalDrawer } from "recoil/atom/drawer/globalDrawer";
import { useRouter } from "next/router";
import DateFilterDrawer from "./DateFilterDrawer";

interface Props {}

const DateFilter: React.FC<Props> = () => {
  const { openGlobalDrawer } = useGlobalDrawer();
  const router = useRouter();

  const dateLabel = useMemo(() => {
    if (router.query.year) {
      if (typeof router.query.year === "string") {
        return router.query.year;
      }
      return `${router.query.year[0]}~${router.query.year[1]}`;
    }
    return "전체";
  }, [router.query.year]);

  const handleClick = () => {
    openGlobalDrawer({
      component: DateFilterDrawer,
    });
  };

  return (
    <>
      {/* TODO : Change label to value */}
      <FilterButton title="연도" label={dateLabel} onClick={handleClick} />
    </>
  );
};

export default DateFilter;
