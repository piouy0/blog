import React, { useCallback, useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useToc } from "recoil/atom/toc/toc";

import Sticky from "components/stickey";

import { devices } from "styles/devices";
import { themedPalette } from "styles/theme";
import { getScrollTop } from "utils/utils";

const Wrapper = styled.div`
  position: relative;
  margin-top: 32px;
`;

const TocContainer = styled.div`
  ${devices.largeDesktop} {
    position: absolute;
    left: 100%;
  }
`;

const TocList = styled(Sticky)`
  width: 240px;
  margin-left: 80px;
  padding: 4px 12px;
  border-left: 2px solid ${themedPalette.secondaryBorder};
`;

interface TocItem {
  isActive: boolean;
  marginLeft: number;
  isEnd: boolean;
}

const TocItem = styled.div<TocItem>`
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  margin-bottom: ${({ isEnd }) => (isEnd ? "unset" : "4px")};
  font-size: 14px;

  & > a {
    display: block;
    line-height: 1.5;
    text-decoration: none;
    color: ${themedPalette.secondaryText};
    transition: color 0.125s ease;
    &:hover {
      color: ${themedPalette.primaryText};
    }

    ${({ isActive }) =>
      isActive &&
      css`
        color: ${themedPalette.primaryText};
      `}
  }
`;

interface Props {}

const Toc: React.FC<Props> = () => {
  const [toc] = useToc();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [headingTops, setHeadingTops] = useState<{ id: string; top: number }[] | null>(null);

  const updateTocPositions = useCallback(() => {
    if (!toc) return;

    const scrollTop = getScrollTop();
    const headingTops = toc.map(({ id }) => {
      const el = document.getElementById(id);

      if (!el) {
        return {
          id,
          top: 0,
        };
      }

      const top = el.getBoundingClientRect().top + scrollTop;

      return {
        id,
        top,
      };
    });

    setHeadingTops(headingTops);
  }, [toc]);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    if (!headingTops) return;

    const currentHeading = [...headingTops].reverse().find(headingTop => scrollTop >= headingTop.top - 4);

    if (!currentHeading) {
      setActiveId(null);
      return;
    }

    setActiveId(currentHeading.id);
  }, [headingTops]);

  useEffect(() => {
    updateTocPositions();

    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    function checkScrollHeight() {
      const { scrollHeight } = document.body;
      if (prevScrollHeight !== scrollHeight) {
        updateTocPositions();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(checkScrollHeight, 250);
    }
    timeoutId = setTimeout(checkScrollHeight, 250);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [updateTocPositions]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // For post SSR
  useEffect(() => {
    onScroll();
  }, [onScroll]);

  if (!toc || !headingTops) return null;

  return (
    <Wrapper>
      <TocContainer>
        <TocList top={112}>
          {toc &&
            toc.map((item, index) => (
              <TocItem
                key={item.id}
                id={item.id}
                isActive={item.id === activeId}
                marginLeft={item.level * 8}
                isEnd={toc.length - 1 === index}
              >
                <a href={`#${item.id}`}>{item.text}</a>
              </TocItem>
            ))}
        </TocList>
      </TocContainer>
    </Wrapper>
  );
};

export default Toc;
