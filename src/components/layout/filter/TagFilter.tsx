import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ClickAwayListener } from "@mui/material";
import { useRouter } from "next/router";

import ToggleButton from "components/common/button/ToggleButton";
import Button from "components/common/button/Button";

import { themedPalette } from "styles/theme";
import { POST_TAGS } from "constants/post";
import { useSnackbar } from "recoil/atom/snackbar/snackbar";
import { MESSAGE_STATUS } from "utils/state";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  width: 2px;
  height: 24px;
  margin: 0 24px;
  background: ${themedPalette.primaryBorder};
`;

const Container = styled.div``;

const Modal = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  max-width: 800px;
  width: calc(100% - 160px);
  margin-top: 12px;
  background: ${themedPalette.primaryBackground};
  border: 1px solid ${themedPalette.secondaryBorder};
  box-shadow: ${themedPalette.boxShadow};
  border-radius: 6px;
`;

const Title = styled.div`
  margin-bottom: 12px;
  color: ${themedPalette.secondaryText};
  font-size: 0.75rem;
`;

const TagList = styled.div`
  padding: 24px 24px 12px;
`;

const Tag = styled.div<{ isActive: boolean }>`
  display: inline-block;
  padding: 8px 12px;
  margin: 0 12px 12px 0;
  background: ${themedPalette.primaryBorder};
  border: 1px solid ${themedPalette.primaryBorder};
  color: ${themedPalette.primaryText};
  border-radius: 32px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: border-color 0.125s ease;
  &:hover {
    border-color: ${themedPalette.tertiaryColor};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${themedPalette.primaryBackground};
      border: 1px solid ${themedPalette.primaryColor};
      color: ${themedPalette.primaryColor};
      font-weight: 600;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  border-top: 1px solid ${themedPalette.primaryBorder};
`;

interface Props {}

const TagFilter: React.FC<Props> = () => {
  const { openSnackbar } = useSnackbar();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isAcviceTagList, setAcviceTagList] = useState<string[]>([]);
  const router = useRouter();
  const tagItem = router.query?.group ? POST_TAGS[router.query.group] : null;

  const handleToggle = () => {
    setModalVisible(prev => !prev);
  };

  const handleOpenSuccessSnackbar = () => {
    openSnackbar({
      status: MESSAGE_STATUS.SUCCESS,
      message: "적용되었습니다 :D",
    });
  };

  const handleOpenErrorSnackbar = () => {
    openSnackbar({
      status: MESSAGE_STATUS.ERROR,
      message: "최대 선택 가능한 태그는 5개입니다.",
    });
  };

  const handleRoute = () => {
    router.push({
      pathname: router.route,
      query: {
        ...router.query,
        tag: isAcviceTagList,
      },
    });
  };

  const handleApply = () => {
    setModalVisible(false);

    handleOpenSuccessSnackbar();

    handleRoute();
  };

  useEffect(() => {
    setAcviceTagList([]);

    const tags = router.query?.tag;
    if (tags) {
      if (typeof tags === "string") {
        setAcviceTagList([tags]);
      } else {
        setAcviceTagList([...tags]);
      }
    }
  }, [router.query.tag]);

  if (!tagItem) {
    return null;
  }

  return (
    <Wrapper>
      <Divider />
      <Container>
        <ToggleButton label="개발전체" handleClick={handleToggle} />
        {isModalVisible && (
          <ClickAwayListener onClickAway={handleToggle}>
            <Modal>
              <TagList>
                <Title>태그를 선택해주세요. (최대 5개 선택 가능)</Title>
                {tagItem.map((tag: string) => {
                  const isActive = isAcviceTagList.includes(tag);

                  const handleTagClick = () => {
                    if (isActive) {
                      setAcviceTagList(prev => prev.filter(activeTag => activeTag !== tag));
                    } else if (isAcviceTagList.length < 5) {
                      setAcviceTagList(prev => [...prev, tag]);
                    } else {
                      handleOpenErrorSnackbar();
                    }
                  };

                  return (
                    <Tag key={tag} isActive={isActive} onClick={handleTagClick}>
                      {tag}
                    </Tag>
                  );
                })}
              </TagList>
              <ButtonWrapper>
                <Button theme="primary" size="medium" onClick={handleApply}>
                  선택 적용하기
                </Button>
              </ButtonWrapper>
            </Modal>
          </ClickAwayListener>
        )}
      </Container>
    </Wrapper>
  );
};

export default TagFilter;
