import styled from "@emotion/styled";
import { colors, shadows } from "global/constants";

export default styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary_dark};
  box-shadow: ${shadows.shadow1};

  .action {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.gray};
    cursor: pointer;

    :hover {
      color: ${colors.accent};
    }

    :active {
      color: ${colors.gray};
    }

    svg {
      font-size: 30px;
      margin: 20px 0 4px;
    }

    p {
      font-size: 11px;
    }
  }
`;
