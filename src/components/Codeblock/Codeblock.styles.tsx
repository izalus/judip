import styled from "@emotion/styled";
import { colors } from "global/constants";

export default styled.div`
  width: 100%;
  min-height: 500px;

  .ace_editor > * {
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.dark_tint1};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.dark_tint2};
    }
  }
`;
