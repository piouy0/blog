import React from "react";
import styled from "@emotion/styled";
import { Drawer } from "@mui/material";

const Content = styled.div``;

interface Props {}

const GlobalDrawer: React.FC<Props> = () => {
  return (
    <Drawer anchor="bottom" open={true} onClose={() => {}}>
      <Content>Content</Content>
    </Drawer>
  );
};

export default GlobalDrawer;
