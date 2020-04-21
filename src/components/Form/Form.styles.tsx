import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { colors } from "global/constants";

const radioAndCheckStyles = css`
  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type="checkbox"],
    input[type="radio"] {
      --active: ${colors.accent};
      --active-inner: ${colors.primary_dark};
      --focus: 2px rgba(39, 94, 254, 0.3);
      --border: ${colors.gray};
      --border-hover: #275efe;
      --background: ${colors.primary_dark};
      --disabled: #f6f8ff;
      --disabled-inner: #e1e6f9;
      -webkit-appearance: none;
      -moz-appearance: none;
      height: 21px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: all 0.3s;
      :after {
        content: "";
        display: block;
        left: 0;
        top: 0;
        position: absolute;
        transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
          opacity var(--d-o, 0.2s);
      }
      :checked {
        --b: var(--active);
        --bc: var(--active);
        --d-o: 0.3s;
        --d-t: 0.6s;
        --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      :disabled {
        --b: var(--disabled);
        cursor: not-allowed;
        opacity: 0.9;
        :checked {
          --b: var(--disabled-inner);
          --bc: var(--border);
        }
        + label {
          cursor: not-allowed;
        }
      }
      :hover {
        :not(:checked) {
          :not(:disabled) {
            --bc: var(--border-hover);
          }
        }
      }
      :focus {
        box-shadow: 0 0 0 var(--focus);
      }
      :not(.switch) {
        width: 21px;
        :after {
          opacity: var(--o, 0);
        }
        :checked {
          --o: 1;
        }
      }
      + label {
        font-size: 16px;
        line-height: 21px;
        display: inline-block;
        vertical-align: top;
        cursor: pointer;
        margin-left: 4px;
      }
    }
    input[type="checkbox"] {
      :not(.switch) {
        border-radius: 7px;
        :after {
          width: 5px;
          height: 9px;
          border: 2px solid var(--active-inner);
          border-top: 0;
          border-left: 0;
          left: 7px;
          top: 4px;
          transform: rotate(var(--r, 20deg));
        }
        :checked {
          --r: 43deg;
        }
      }
      .switch {
        width: 38px;
        border-radius: 11px;
        :after {
          left: 2px;
          top: 2px;
          border-radius: 50%;
          width: 15px;
          height: 15px;
          background: var(--ab, var(--border));
          transform: translateX(var(--x, 0));
        }
        :checked {
          --ab: var(--active-inner);
          --x: 17px;
        }
        :disabled {
          :not(:checked) {
            :after {
              opacity: 0.6;
            }
          }
        }
      }
    }
    input[type="radio"] {
      border-radius: 50%;
      :after {
        width: 19px;
        height: 19px;
        border-radius: 50%;
        background: var(--active-inner);
        opacity: 0;
        transform: scale(var(--s, 0.7));
      }
      :checked {
        --s: 0.5;
      }
    }
  }
`;

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 16px;

    input[type="text"],
    select {
      flex: 1;
      padding: 8px;
      background-color: ${colors.primary};
      border-radius: 4px;
      color: ${colors.white};
      border: 1.5px solid ${colors.primary};

      :focus {
        border-color: ${colors.accent};
      }
    }

    input[type="text"]::placeholder {
      color: ${colors.gray};
    }

    ${radioAndCheckStyles}

    span {
      display: flex;
      align-items: center;
      margin-right: 12px;

      input[type="radio"] {
        margin-right: 6px;
      }

      :first-of-type {
        margin-left: 8px;
      }
    }

    input[type="checkbox"] {
      margin-right: 4px;
    }

    label {
      padding-right: 8px;
      font-size: 16px;
    }
  }

  .textarea {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      padding-bottom: 8px;
    }

    textarea {
      width: 100%;
      padding: 8px;
      background-color: ${colors.primary};
      border-radius: 4px;
      color: ${colors.white};
      border: 1.5px solid ${colors.primary};

      ::placeholder {
        color: ${colors.gray};
      }

      :focus {
        border-color: ${colors.accent};
      }
    }
  }

  .radio,
  .checkbox {
    padding-bottom: 16px;
  }
`;
