import React, { FC } from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Fonts from '../fonts';

const CommonStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  ul, ol {
    list-style: none;
  }

  body {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    color: #ffffff;
  }
`;

const GlobalStyles: FC = () => (
  <>
    <Normalize />
    <Fonts />
    <CommonStyles />
  </>
);

export default GlobalStyles;
