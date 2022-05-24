import React, { useState } from "react";
import styled from "@emotion/styled";

import ToggleButton from "components/common/button/ToggleButton";

const Wrapper = styled.div``;

interface Props {}

const StackCategory: React.FC<Props> = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleClick = () => {
    setModalVisible(prev => !prev);
  };

  return (
    <Wrapper>
      <ToggleButton label="개발전체" handleClick={handleClick} />
      {/* {isModalVisible} */}
    </Wrapper>
  );
};

export default StackCategory;
