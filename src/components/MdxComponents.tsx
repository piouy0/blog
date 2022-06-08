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

const Code = styled.pre`
  --code-background: #272822;
  --code-foreground: #f8f8f2;
  --code-comment: #757575;
  --code-red: #f92672;
  --code-orange: #fd971f;
  --code-light-orange: #e69f66;
  --code-yellow: #e6db74;
  --code-green: #a6e22e;
  --code-blue: #66d9ef;
  --code-purple: #ae81ff;

  margin: 12px 0;
  padding: 16px;
  background: var(--code-background);
  border-radius: 8px;
  color: #f8f8f2;
  font-size: 14px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  tab-size: 4;
  line-height: 1.7;

  & .language-tsx {
    color: var(--code-orange);
  }

  & .language-css {
    color: var(--code-blue);
  }

  & .token.tag {
    color: var(--code-red);
    & .class-name {
      color: var(--code-blue);
    }
  }

  & .token.attr-value {
    color: var(--code-yellow);
    & .punctuation {
      color: var(--code-yellow);
    }
    & .attr-equals {
      color: var(--code-foreground);
    }
  }

  & .token.punctuation {
    color: var(--code-foreground);
  }

  & .token.attr-name {
    color: var(--code-green);
  }

  & .token.keyword {
    color: var(--code-blue);
    &.module {
      color: var(--code-red);
    }
    &.control-flow {
      color: var(--code-red);
    }
  }

  & .token.operator {
    color: var(--code-red);
    &.arrow {
      color: var(--code-blue);
    }
  }

  & .token.parameter {
    color: var(--code-orange);
  }

  & .token.string,
  .token.property {
    color: var(--code-yellow);
  }

  & .token.class-name,
  .token.function {
    color: var(--code-green);
  }

  & .token.number {
    color: var(--code-purple);
  }

  & .token.script {
    & .property-access,
    .keyword {
      color: var(--code-foreground);
    }
  }

  & .token.console.class-name,
  .token.method.function.property-access {
    color: var(--code-blue);
  }

  & .builtin {
    color: var(--code-blue);
  }

  & .token.selector {
    color: var(--code-red);
    & .class {
      color: var(--code-green);
    }
  }

  & .token.property {
    color: var(--code-blue);
  }

  & .token.unit {
    color: var(--code-red);
  }

  & .token.hexcode {
    color: var(--code-purple);
  }

  & .token.pseudo-class,
  .token.pseudo-element {
    color: var(--code-green);
  }

  & .token.color {
    & .token.function {
      color: var(--code-blue);
    }
  }
`;

const MdxComponents: IMDXComponents = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  pre: props => <Code {...props} />,
};

export default MdxComponents;
