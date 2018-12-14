import styled from 'styled-components';
import { palette, key } from 'styled-theme';

export const TextWrapper = styled.span`
  fontfamily: ${key('fonts.primary')};
  color: ${palette('text', 0)};
  line-height: 20px;
  .bigTitle {
    /*64 */
    font-size: 64px;
    line-height: 70px;
    font-weight: ${key('fontWeights.medium')};
    color: ${palette('text', 0)};
  }

  .largeTitleBold {
    /* 34 */
    font-size: 34px;
    line-height: 42px;
    font-weight: ${key('fontWeights.bold')};
    color: ${palette('text', 0)};
  }
  .largeTitle {
    /* 34 */
    font-size: 34px;
    line-height: 42px;
    font-weight: ${key('fontWeights.semibold')};
    color: ${palette('text', 0)};
  }
  .title1 {
    /* 26 */
    font-size: 26px;
    line-height: 34px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 0)};
  }
  .title2 {
    /* 20 */
    font-size: 20px;
    line-height: 28px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 0)};
  }
  .headline {
    /* semi bold 17 */
    font-size: 17px;
    line-height: 25px;
    font-weight: ${key('fontWeights.semibold')};
    color: ${palette('text', 0)};
  }
  .body1 {
    /* 18 */
    font-size: 18;
    line-height: 26px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 1)};
  }
  .body2 {
    /*16 */
    font-size: 16px;
    line-height: 24px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 1)};
  }
  .body2Bold {
    /*bold 16 */
    font-size: 16px;
    line-height: 24px;
    font-weight: ${key('fontWeights.bold')};
    color: ${palette('text', 1)};
  }
  .body3 {
    /* 14 */
    font-size: 14px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 1)};
    line-height: 22px;
  }
  .small {
    /* 12 */
    font-size: 12px;
    line-height: 20px;
    font-weight: ${key('fontWeights.regular')};
    color: ${palette('text', 2)};
  }
  .tiny {
    /* 10 */
    font-size: 10px;
    line-height: 18px;
    color: ${palette('text', 5)};
  }
  /* txtUnderline */
  .txtUnderline {
    text-decoration-line: 'underline';
  }
  .light {
    font-weight: ${key('fontWeights.light')};
  }
  .medium {
    font-weight: ${key('fontWeights.medium')};
  }
  .bold {
    font-weight: ${key('fontWeights.bold')};
  }
  .semiBold {
    font-weight: ${key('fontWeights.semiBold')};
  }
  .left {
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .right {
    text-align: right;
  }
`;
