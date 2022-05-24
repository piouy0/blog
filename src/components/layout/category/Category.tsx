import React from "react";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";
import DateFilter from "./DateFilter";
import StackCategory from "./StackCategory";
import StackGroup from "./StackGroup";

const Wrapper = styled.div``;

const StackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const Divider = styled.div`
  width: 2px;
  height: 24px;
  margin: 0 24px;
  background: ${themedPalette.primaryBorder};
`;

interface Props {}

const Category: React.FC<Props> = () => {
  return (
    <Wrapper>
      <StackWrapper>
        <StackGroup />
        <Divider />
        <StackCategory />
      </StackWrapper>
      <DateFilter />
    </Wrapper>
  );
};

export default Category;
