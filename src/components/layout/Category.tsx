import React from "react";
import styled from "@emotion/styled";

import DateFilter from "./DateFilter";
import TagFilter from "./TagFilter";

const Wrapper = styled.div``;

interface Props {}

const Category: React.FC<Props> = () => {
  return (
    <Wrapper>
      <DateFilter />
      <TagFilter />
    </Wrapper>
  );
};

export default Category;
