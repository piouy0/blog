import React, { useState } from "react";
import styled from "@emotion/styled";

import ToggleButton from "components/common/button/ToggleButton";
import { LAYER_2_ZINDEX } from "styles/constants";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  position: relative;
`;

const StackList = styled.div`
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: ${LAYER_2_ZINDEX};
  width: 180px;
  padding: 16px 0;
  margin-top: 12px;
  border: 1px solid ${themedPalette.quaternaryBorder};
  border-radius: 6px;
  background: ${themedPalette.primaryBackground};
`;

const StackItem = styled.div`
  padding: 12px 0 12px 24px;
  color: ${themedPalette.primaryText};
  &:hover {
    background: ${themedPalette.secondaryBackground};
  }
`;

interface Props {}

const StackGroup: React.FC<Props> = () => {
  const [isSelectVisible, setSelectVisible] = useState(false);

  const handleClick = () => {
    setSelectVisible(prev => !prev);
  };

  return (
    <Wrapper>
      <ToggleButton label="개발" fontWeight="bold" handleClick={handleClick} />
      {isSelectVisible && (
        <StackList>
          <StackItem>1</StackItem>
          <StackItem>2</StackItem>
        </StackList>
      )}
    </Wrapper>
  );
};

export default StackGroup;
