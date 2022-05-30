import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { ClickAwayListener } from "@mui/material";

import ToggleButton from "components/common/button/ToggleButton";

import { LAYER_2_ZINDEX } from "styles/constants";
import { themedPalette } from "styles/theme";
import { ALL_GROUP, POST_GROUP, POST_LABEL } from "constants/post";

const Wrapper = styled.div``;

const GroupList = styled.div`
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 100%;
  z-index: ${LAYER_2_ZINDEX};
  width: 180px;
  padding: 16px 0;
  margin-top: 12px;
  border: 1px solid ${themedPalette.secondaryBorder};
  border-radius: 6px;
  background: ${themedPalette.primaryBackground};
  box-shadow: ${themedPalette.modalShadow};
`;

const GroupItem = styled.div<{ isActive: boolean }>`
  padding: 12px 0 12px 24px;
  color: ${themedPalette.primaryText};
  cursor: pointer;

  &:hover {
    background: ${themedPalette.secondaryBackground};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themedPalette.primaryColor};
      font-weight: bold;
    `}
`;

interface Props {}

const GroupFilter: React.FC<Props> = () => {
  const [isSelectVisible, setSelectVisible] = useState(false);
  const router = useRouter();

  const buttonLabel = useMemo(
    () => (router.query?.group ? POST_LABEL[router.query.group] : POST_LABEL[ALL_GROUP]),
    [router.query.group],
  );

  const handleToggle = () => {
    setSelectVisible(prev => !prev);
  };

  const handleRoute = (group: string) => {
    const { query } = router;

    delete query.tag;

    router.push({
      pathname: router.route,
      query: {
        ...query,
        group,
      },
    });
  };

  const handleGroupClick = (group: string) => () => {
    setSelectVisible(false);

    handleRoute(group);
  };

  return (
    <Wrapper>
      <ToggleButton label={buttonLabel} fontWeight="bold" handleClick={handleToggle} />
      {isSelectVisible && (
        <ClickAwayListener onClickAway={handleToggle}>
          <GroupList>
            {POST_GROUP.map((group, index) => {
              const isActiveGroupItem = router.query?.group ? router.query.group === group : index === 0;

              return (
                <GroupItem key={group} onClick={handleGroupClick(group)} isActive={isActiveGroupItem}>
                  {POST_LABEL[group]}
                </GroupItem>
              );
            })}
          </GroupList>
        </ClickAwayListener>
      )}
    </Wrapper>
  );
};

export default GroupFilter;
