import React, { useState } from "react";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";
import { css } from "@emotion/react";
import ArrowIcon from "../../../../public/assets/svg/ArrowIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
`;

const Label = styled.div<{ fontWeight: "normal" | "bold" }>`
  margin-right: 16px;
  color: ${themedPalette.primaryText};
  font-size: 1.5rem;
  font-weight: ${({ fontWeight }) => fontWeight};
`;

const IconWrapper = styled.div`
  margin-top: 2px;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid ${themedPalette.secondaryBorder};
  border-radius: 24px;
  text-align: center;
  transition: border-color 0.125s ease-in;

  & > svg {
    margin-top: 6px;
    & path {
      fill: ${themedPalette.secondaryText};
      transition: fill 0.125s ease-in;
    }
    transition: all 0.125s ease-in;
  }

  &:hover {
    border-color: ${themedPalette.secondaryText};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & > svg {
        margin-top: 4.5px;
        transform: rotate(180deg);
      }
    `}
`;

interface Props {
  label: string;
  fontWeight?: "normal" | "bold";
  handleClick: () => void;
}

const ToggleButton: React.FC<Props> = ({ label, fontWeight = "normal", handleClick }) => {
  const [isActive, setActive] = useState(false);

  const onClick = () => {
    handleClick();
    setActive(prev => !prev);
  };

  return (
    <Wrapper onClick={onClick}>
      <Label fontWeight={fontWeight}>{label}</Label>
      <IconWrapper>
        <Icon isActive={isActive}>
          <ArrowIcon />
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default ToggleButton;
