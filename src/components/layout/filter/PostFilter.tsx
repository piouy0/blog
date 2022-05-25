import React from "react";
import styled from "@emotion/styled";

import DateFilter from "./DateFilter";
import TagFilter from "./TagFilter";
import GroupFilter from "./GroupFilter";

const Wrapper = styled.div``;

const PostContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const DateContainer = styled.div``;

interface Props {}

const PostFilter: React.FC<Props> = () => {
  return (
    <Wrapper>
      <PostContainer>
        <GroupFilter />
        <TagFilter />
      </PostContainer>
      <DateContainer>
        <DateFilter />
      </DateContainer>
    </Wrapper>
  );
};

export default PostFilter;
