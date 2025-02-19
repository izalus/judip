import styled from "@emotion/styled";
import { colors, shadows, zIndices } from "global/constants";

export default styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: ${colors.primary_dark};
  box-shadow: ${shadows.shadow2};
  display: flex;
  flex-direction: column;
  color: ${colors.gray};
  z-index: ${zIndices.modal};
  width: 50%;
  max-width: 512px;
  max-height: 80%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.dark_tint1};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.dark_tint2};
  }

  .title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;

    button {
      flex: 1;
      color: ${colors.white};
      background-color: ${colors.accent};
      margin-right: 8px;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      opacity: 0.8;
      max-width: 128px;

      :hover,
      :focus {
        opacity: 1;
      }

      :active {
        opacity: 0.8;
      }

      :last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.5;
  z-index: ${zIndices.backdrop};
`;
