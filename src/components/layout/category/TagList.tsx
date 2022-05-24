import React from "react";
import styled from "@emotion/styled";

import { POST_TAGS } from "constants/tags";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 24px;
`;

const TagItem = styled.div<{ isEnd: boolean }>`
  padding: 8px 16px;
  margin-right: ${({ isEnd }) => (isEnd ? "0px" : "8px")};
  background: ${themedPalette.iconPrimaryBackground};
  border-radius: 32px;
  color: ${themedPalette.highlightBackground};
  font-size: 0.875rem;
  cursor: pointer;
`;

interface Props {}

const TagList: React.FC<Props> = () => {
  return (
    <Wrapper>
      {[...POST_TAGS, ...POST_TAGS].map((tag, index) => (
        <TagItem key={tag} isEnd={index === POST_TAGS.length - 1}>
          {tag}
        </TagItem>
      ))}
    </Wrapper>
  );
};

export default TagList;
