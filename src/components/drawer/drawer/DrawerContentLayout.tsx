import React from "react";
import { Container } from "./commonStyle";

interface Props {
  handleClose?: () => void;
  children: React.ReactNode;
}

const DrawerContentLayout: React.FC<Props> = ({ handleClose, children }) => {
  return <Container>{children}</Container>;
};

export default DrawerContentLayout;
