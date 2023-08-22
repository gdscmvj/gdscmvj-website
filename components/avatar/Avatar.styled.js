import { css, styled } from "styled-components";

export const AvatarWrapper = styled.div`
  ${({ size }) =>
    (size === "xs" &&
      css`
        width: 32px;
        height: 32px;
      `) ||
    (size === "sm" &&
      css`
        width: 47px;
        height: 47px;
      `) ||
    (size === "md" &&
      css`
        width: 75px;
        height: 75px;
      `) ||
    (size === "lg" &&
      css`
        width: 100px;
        height: 100px;
      `) ||
    (size === "xl" &&
      css`
        width: 150px;
        height: 150px;
      `) ||
    (size === "xxl" &&
      css`
        width: 232px;
        height: 232px;
      `)}
  ${({ blur }) =>
    blur
      ? css`
          box-shadow: ${({ borderColor, theme }) =>
            borderColor
              ? `0px 0px 15px 5px ${borderColor}`
              : `0px 0px 15px 5px ${theme.colors.bgPrimary}`};
        `
      : css`
          border-width: ${({ borderWidth }) =>
            borderWidth ? borderWidth : "3px"};
          border-color: ${({ borderColor, theme }) =>
            borderColor ? borderColor : theme.colors.bgPrimary};
          border-style: solid;
        `}

  background: ${({ url }) =>
    `url(${url ? url : "/images/gdsc_fallback.png"})`} no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;

  &.first {
    z-index: 1;
    position: absolute;
    left: 0px;
  }
  &.second {
    z-index: 3;
    position: absolute;
    left: 150px;
  }
  &.third {
    z-index: 2;
    position: absolute;
    left: 300px;
  }
`;