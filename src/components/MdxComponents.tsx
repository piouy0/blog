import React from "react";
import { MDXComponents as IMDXComponents } from "mdx/types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { themedPalette } from "styles/theme";

const TitleCommonStyle = css`
  padding: 3px 2px;
  margin-bottom: 4px;
  color: ${themedPalette.primaryText};
  font-weight: bold;
`;

const H1 = styled.h1`
  ${TitleCommonStyle}

  margin-top: 2.25rem;
  font-size: 2.25rem;
`;

const H2 = styled.h2`
  ${TitleCommonStyle}

  margin-top: 1.75rem;
  font-size: 1.75rem;
`;

const H3 = styled.h3`
  ${TitleCommonStyle}

  margin-top: 1.5rem;
  font-size: 1.5rem;
`;

const MdxComponents: IMDXComponents = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
};

export default MdxComponents;
