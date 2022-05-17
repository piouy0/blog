import styled from "@emotion/styled";
import { themedPalette } from "styles/theme";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  overflow-y: scroll;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  background: ${themedPalette.primaryBackground};
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
