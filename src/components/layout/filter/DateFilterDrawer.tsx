import React from "react";
import { useRouter } from "next/router";

import Slider from "components/slider/Slider";
import { useGlobalDrawer } from "recoil/atom/drawer/globalDrawer";
import DrawerContentsLayout from "../../drawer/drawer/DrawerContentsLayout";

const minDate = 2022;
/* TODO : If it is 2023, change to New Date getFullYear */
const maxDate = 2023;

interface Props {}

const DateFilterDrawer: React.FC<Props> = () => {
  const { closeGlobalDrawer } = useGlobalDrawer();
  const router = useRouter();
  const [dates, setDates] = React.useState<number[]>([minDate, maxDate]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setDates(newValue as number[]);
  };

  const handleRoute = () => {
    const queryYear = dates[0] === dates[1] ? dates[0] : dates;

    router.push({
      pathname: router.route,
      query: {
        ...router.query,
        year: queryYear,
      },
    });
  };

  const handleApply = () => {
    handleRoute();
  };

  return (
    <DrawerContentsLayout title={"연도"} handleClose={closeGlobalDrawer} handleApply={handleApply}>
      <Slider min={minDate} max={maxDate} value={dates} onChange={handleChange} />
    </DrawerContentsLayout>
  );
};

export default DateFilterDrawer;
