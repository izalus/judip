import styled from "@emotion/styled";
import { colors } from "global/constants";

export default styled.div`
  height: 100%;
  flex: 1;
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${colors.dark_tint1};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${colors.dark_tint2};
  }
`;
