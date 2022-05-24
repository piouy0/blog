import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";
import Header from "./Header";

const Floating = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${themedPalette.layoutBackground};
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
`;

interface Props {}

const FloatingHeader: React.FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  const floatingHeaderRef = useRef<HTMLDivElement>(null);
  const prevDirection = useRef<"UP" | "DOWN">("DOWN");
  const prevScrollTop = useRef(0);
  const transitionPoint = useRef(0);

  const onScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const nextDirection = prevScrollTop.current > scrollTop ? "UP" : "DOWN";

    if (prevDirection.current === "DOWN" && nextDirection === "UP") {
      setVisible(true);
      transitionPoint.current = scrollTop;
    }

    if (prevDirection.current === "UP" && nextDirection === "DOWN") {
      transitionPoint.current = scrollTop + height;
    }

    if (scrollTop < 64) {
      setVisible(false);
    }

    console.log(-1 * height + transitionPoint.current - scrollTop);

    setMarginTop(Math.min(0, -1 * height + transitionPoint.current - scrollTop));

    prevDirection.current = nextDirection;
    prevScrollTop.current = scrollTop;
  }, [height]);

  useEffect(() => {
    if (!floatingHeaderRef.current) return;
    setHeight(floatingHeaderRef.current.clientHeight);
    setMarginTop(-1 * floatingHeaderRef.current.clientHeight);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <Floating
      ref={floatingHeaderRef}
      style={
        visible
          ? {
              visibility: "visible",
              marginTop,
            }
          : {
              visibility: "hidden",
              marginTop: -1 * height,
            }
      }
    >
      <Header />
    </Floating>
  );
};

export default FloatingHeader;
