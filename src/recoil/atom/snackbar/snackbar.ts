import { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import produce from "immer";

import { MESSAGE_STATUS } from "utils/state";

export interface SnackbarState {
  open: boolean;
  handleClose?: () => void;
  status: MESSAGE_STATUS;
  message: string;
}

const snackbarState = atom<SnackbarState>({
  key: "snackbarState",
  default: {
    open: false,
    status: MESSAGE_STATUS.SUCCESS,
    message: "",
  },
});

interface Action {
  handleClose?: () => void;
  status: MESSAGE_STATUS;
  message: string;
}

const snackbarActions = () => {
  const dispatch = useSetRecoilState(snackbarState);

  return useMemo(
    () => ({
      openSnackbar: (payload: Action) => {
        dispatch(
          produce(draft => {
            draft.open = true;
            draft.status = payload.status;
            draft.message = payload.message;
            draft.handleClose = payload.handleClose;
          }),
        );
      },

      closeSnackbar: () => {
        dispatch(
          produce(draft => {
            draft.open = false;
            draft.message = "";
            draft.handleClose = undefined;
          }),
        );
      },
    }),
    [dispatch],
  );
};

export const useSnackbar = () => {
  const state = useRecoilValue(snackbarState);
  const { openSnackbar, closeSnackbar } = snackbarActions();

  return { state, openSnackbar, closeSnackbar };
};
