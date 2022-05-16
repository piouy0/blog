import React from "react";
import styled from "@emotion/styled";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${themedPalette.primaryBorder};
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.125s ease;
  &:hover {
    background: ${themedPalette.secondaryBackground};
  }
`;

const Title = styled.div`
  margin-right: 16px;
  color: ${themedPalette.secondaryText};
`;

const Label = styled.div`
  color: ${themedPalette.highlightBackground};
  font-weight: 600;
`;

interface Props {
  onClick: () => void;
}

const FilterButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Title>연도</Title>
      <Label>Label</Label>
    </Wrapper>
  );
};

export default FilterButton;
