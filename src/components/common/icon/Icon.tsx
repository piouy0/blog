import React from "react";
import styled from "@emotion/styled";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  height: 24px;
  & svg {
    font-size: 24px;
    color: ${themedPalette.primaryText};
  }
`;

interface Props {
  icon: React.ReactNode;
}

const Icon: React.FC<Props> = ({ icon }) => <Wrapper>{icon}</Wrapper>;

export default Icon;
