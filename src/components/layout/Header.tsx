import React from "react";
import styled from "@emotion/styled";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import GitHub from "@mui/icons-material/GitHub";

import IconButton from "components/common/button/IconButton";
import Icon from "components/common/icon/Icon";

import { themedPalette } from "styles/theme";
import useToggleTheme from "hooks/theme/useToggleTheme";

const Wrapper = styled.div`
  /* for floating banner */
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${themedPalette.primaryText};
`;

const Util = styled.div`
  display: flex;
`;

interface UtilItemProps {
  isEnd: boolean;
}

const UtilItem = styled.div<UtilItemProps>`
  margin-right: ${({ isEnd }) => (isEnd ? "unset" : "10px")};
`;

const utilItems = [
  {
    label: "mode",
    icon: <LightMode />,
  },
  {
    label: "git",
    icon: <GitHub />,
  },
];

interface Props {}

const Header: React.FC<Props> = () => {
  const toggle = useToggleTheme();

  return (
    <Wrapper>
      <Container>
        <Logo>Test</Logo>
        <Util>
          {utilItems.map((item, index) => (
            <UtilItem key={item.label} isEnd={index === utilItems.length - 1} onClick={toggle}>
              <IconButton>
                <Icon icon={item.icon} />
              </IconButton>
            </UtilItem>
          ))}
        </Util>
      </Container>
    </Wrapper>
  );
};

export default Header;
