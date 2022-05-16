import { atom, useRecoilState } from "recoil";

export interface GlobalDrawerState {
  open: boolean;
  handleClose: (() => void) | null;
  component: React.FC | null;
  componentProps?: any;
}

const globalDrawerState = atom<GlobalDrawerState>({
  key: "globalDrawerState",
  default: {
    open: false,
    handleClose: null,
    component: null,
    componentProps: undefined,
  },
});

export const uesGlobalDrawer = () => {
  const [state, dispatch] = useRecoilState(globalDrawerState);

  const openDrawer = () => {};

  const closeDrawer = () => {};

  return { state };
};
