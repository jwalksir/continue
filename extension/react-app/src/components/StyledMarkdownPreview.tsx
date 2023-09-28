import styled from "styled-components";
import {
  defaultBorderRadius,
  lightGray,
  secondaryDark,
  vscBackground,
  vscForeground,
} from ".";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { getFontSize } from "../util";

const StyledMarkdownPreview = styled(MarkdownPreview)<{
  light?: boolean;
  fontSize?: number;
  maxHeight?: number;
}>`
  pre {
    background-color: ${(props) =>
      props.light ? vscBackground : secondaryDark};
    border-radius: ${defaultBorderRadius};
    /* border: 0.5px solid ${lightGray}; */

    max-width: calc(100vw - 24px);
  }

  code {
    color: #f78383;
    word-wrap: break-word;
    border-radius: ${defaultBorderRadius};
    background-color: ${secondaryDark};
  }

  pre > code {
    background-color: ${(props) =>
      props.light ? vscBackground : secondaryDark};
    color: ${vscForeground};
    padding: 12px;

    ${(props) => {
      if (props.maxHeight) {
        return `
          max-height: ${props.maxHeight}px;
          overflow-y: auto;
        `;
      }
    }}
  }

  background-color: ${(props) => (props.light ? "transparent" : vscBackground)};
  font-family: "Lexend", sans-serif;
  font-size: ${(props) => props.fontSize || getFontSize()}px;
  padding: 8px;
  color: ${vscForeground};
`;

export default StyledMarkdownPreview;
