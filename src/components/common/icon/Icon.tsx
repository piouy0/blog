import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 24px;
  & svg {
    font-size: 24px;
  }
`;

interface Props {
  icon: React.ReactNode;
}

const Icon: React.FC<Props> = ({ icon }) => <Wrapper>{icon}</Wrapper>;

export default Icon;
