import React from "react";
import styled from "@emotion/styled";
import { animated, useTransition } from "react-spring";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHub from "@mui/icons-material/GitHub";

import IconButton from "components/common/button/IconButton";

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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${themedPalette.primaryText};
`;

const LogoIcon = styled.div`
  height: 2.5rem;
  cursor: pointer;
  & > svg {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const LogoLabel = styled.div`
  margin-left: 8px;
  font-size: 1.5rem;
`;

const Util = styled.div`
  display: flex;
`;

const UtilItem = styled.div``;

const DarkModeWrapper = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`;

const DarkModeItem = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const AnimatedWrapper = animated(UtilItem);

interface Props {}

const Header: React.FC<Props> = () => {
  const [theme, toggle] = useToggleTheme();

  const isDark = theme === "dark";

  const transitions = useTransition(isDark, {
    initial: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },
    from: {
      transform: "scale(0) rotate(-180deg)",
      opacity: 0,
    },
    enter: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },
    leave: {
      transform: "scale(0) rotate(180deg)",
      opacity: 0,
    },
  });

  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <LogoIcon>
            <CloudIcon />
          </LogoIcon>
          {/* <LogoLabel>Blog</LogoLabel> */}
        </LogoWrapper>
        <Util>
          <UtilItem onClick={toggle}>
            <DarkModeWrapper>
              {transitions((style, item) =>
                item ? (
                  <DarkModeItem>
                    <AnimatedWrapper style={style}>
                      <IconButton>
                        <DarkMode />
                      </IconButton>
                    </AnimatedWrapper>
                  </DarkModeItem>
                ) : (
                  <DarkModeItem>
                    <AnimatedWrapper style={style}>
                      <IconButton>
                        <LightMode />
                      </IconButton>
                    </AnimatedWrapper>
                  </DarkModeItem>
                ),
              )}
            </DarkModeWrapper>
          </UtilItem>
          <UtilItem>
            <IconButton>
              <GitHub />
            </IconButton>
          </UtilItem>
        </Util>
      </Container>
    </Wrapper>
  );
};

export default Header;
