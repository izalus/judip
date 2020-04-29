import styled from "@emotion/styled";
import { colors, shadows, zIndices } from "global/constants";
import { css } from "@emotion/core";

interface IProps {
  fullscreen: boolean;
  outputVisibility: boolean;
}

export default styled.div<IProps>`
  width: calc(100% - 16px);
  min-height: 400px;
  margin: 8px;
  margin-bottom: 0;
  border-radius: 8px;
  background-color: ${colors.primary_dark};
  box-shadow: ${shadows.shadow2};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: ${zIndices.codeblock};

  ${({ fullscreen, outputVisibility }) =>
    fullscreen &&
    css`
      min-height: unset;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: ${outputVisibility ? "60%" : "100%"};
      border-radius: unset;
      box-shadow: unset;
      margin: 0;
      z-index: ${zIndices.codeblock_elevated};
    `}

  .tabs {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;

    .tab {
      padding: 12px 16px;
      max-width: 200px;
      color: ${colors.gray};
      font-size: 13px;
      background-color: ${colors.dark_tint1};
      cursor: pointer;

      :hover {
        color: ${colors.white};
      }
    }

    .selected {
      background-color: ${colors.dark_tint2};
      color: ${colors.white};
    }

    .name {
      color: ${colors.gray};
      margin-left: auto;
      margin-right: 16px;
    }
  }

  .ace_editor > * {
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.dark_gray1};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.dark_gray2};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    padding: 8px;

    svg {
      font-size: 20px;
      color: ${colors.gray};
      cursor: pointer;

      :hover {
        color: ${colors.white};
      }
    }

    button {
      color: ${colors.white};
      background-color: ${colors.accent};
      margin-right: 8px;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      opacity: 0.8;
      max-width: 128px;
      font-size: 13px;

      :hover,
      :focus {
        opacity: 1;
      }

      :active {
        opacity: 0.8;
      }

      :first-of-type {
        margin-left: auto;
      }
    }
  }
`;

export const Output = styled.div<IProps>`
  min-height: 250px;
  width: calc(100% - 96px);
  margin: 8px 48px;
  background-color: ${colors.primary_dark};
  margin-bottom: 0px;
  border-radius: 8px;
  box-shadow: ${shadows.shadow2};
  font-size: 13px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: ${zIndices.output};

  ${({ fullscreen }) =>
    fullscreen &&
    css`
      min-height: unset;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 40%;
      width: 100%;
      margin: 0;
      border-radius: 0;
      z-index: ${zIndices.output_elevated};
    `}

  ${({ outputVisibility }) =>
    !outputVisibility &&
    css`
      display: none;
    `}

  .topbar {
    padding: 8px;

    ${({ fullscreen }) =>
      fullscreen &&
      css`
        display: none;
      `}

    p {
      color: ${colors.gray};
    }
  }

  .ace_editor > * {
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.dark_gray1};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.dark_gray2};
    }
  }
`;
