import { produce } from "immer";
import { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export interface GlobalDrawerState {
  open: boolean;
  handleClose?: () => void;
  component: React.FC | null;
  componentProps?: any;
}

const globalDrawerState = atom<GlobalDrawerState>({
  key: "globalDrawerState",
  default: {
    open: false,
    handleClose: undefined,
    component: null,
    componentProps: undefined,
  },
});

type Action = {
  handleClose?: () => void;
  component: React.FC | null;
  componentProps?: any;
};

const globalDrawerActions = () => {
  const dispatch = useSetRecoilState(globalDrawerState);

  return useMemo(
    () => ({
      openGlobalDrawer: (payload: Action) => {
        dispatch(
          produce(draft => {
            draft.open = true;
            draft.component = payload.component;
            draft.componentProps = payload.componentProps;
            draft.handleClose = payload.handleClose;
          }),
        );
      },
      closeGlobalDrawer: () => {
        dispatch(
          produce(draft => {
            draft.open = false;
            draft.component = null;
            draft.componentProps = null;
            draft.handleClose = undefined;
          }),
        );
      },
    }),
    [dispatch],
  );
};

export const uesGlobalDrawer = () => {
  const state = useRecoilValue(globalDrawerState);
  const { openGlobalDrawer, closeGlobalDrawer } = globalDrawerActions();

  return { state, openGlobalDrawer, closeGlobalDrawer };
};
