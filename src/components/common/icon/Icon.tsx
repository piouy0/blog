import React from "react";
import styled from "@emotion/styled";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  height: 1.5rem;
  & svg {
    display: block;
    color: ${themedPalette.primaryText};
    font-size: 1.5rem;
  }
`;

interface Props {
  icon: React.ReactNode;
}

const Icon: React.FC<Props> = ({ icon }) => <Wrapper>{icon}</Wrapper>;

export default Icon;
