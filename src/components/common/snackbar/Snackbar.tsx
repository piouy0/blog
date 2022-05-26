import React from "react";
import BaseSnackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

import { themedPalette } from "styles/theme";
import { palette } from "styles/palette";
import { MESSAGE_STATUS } from "utils/state";
import IconButton from "../button/IconButton";

const SnackbarStyle = (bgColor: string) => ({
  "& .MuiPaper-root": {
    background: bgColor,
  },
});

interface Props {
  open: boolean;
  handleClose: () => void;
  message: string;
  status: MESSAGE_STATUS;
}

const Snackbar: React.FC<Props> = ({ open, handleClose, message, status }) => {
  const bgColor = status === MESSAGE_STATUS.SUCCESS ? themedPalette.primaryColor : themedPalette.destructiveBackground;

  const action = (
    <React.Fragment>
      <IconButton animateBackground={bgColor} onClick={handleClose}>
        <CloseIcon
          style={{
            color: palette.gray[0],
          }}
        />
      </IconButton>
    </React.Fragment>
  );

  return (
    <BaseSnackbar
      open={open}
      message={message}
      sx={[SnackbarStyle(bgColor)]}
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={3000}
      onClose={handleClose}
    />
  );
};

export default Snackbar;
