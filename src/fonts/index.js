import { createGlobalStyle } from 'styled-components';

import TradeWindsRegularEot from './TradeWinds.eot';
import TradeWindsRegularWoff from './TradeWinds.woff';
import TradeWindsRegularWoff2 from './TradeWinds.woff2';
import TradeWindsRegularTtf from './TradeWinds.woff2';

import RobotoBoldEot from './Roboto-Bold.eot';
import RobotoBoldTtf from './Roboto-Bold.ttf';
import RobotoBoldWoff from './Roboto-Bold.woff';
import RobotoBoldWoff2 from './Roboto-Bold.woff2';

import RobotoRegularEot from './Roboto-Regular.eot';
import RobotoRegularTtf from './Roboto-Regular.ttf';
import RobotoRegularWoff from './Roboto-Regular.woff';
import RobotoRegularWoff2 from './Roboto-Regular.woff2';

import RobotoItalicEot from './Roboto-Italic.eot';
import RobotoItalicTtf from './Roboto-Italic.ttf';
import RobotoItalicWoff from './Roboto-Italic.woff';
import RobotoItalicWoff2 from './Roboto-Italic.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: TradeWinds;
    src: url(${TradeWindsRegularEot});
    src: url('${TradeWindsRegularEot}?#iefix') format('embedded-opentype'),
      url(${TradeWindsRegularWoff2}) format('woff2'),
      url(${TradeWindsRegularWoff}) format('woff'),
      url(${TradeWindsRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: Roboto;
    src: url(${RobotoBoldEot});
    src: url('${RobotoBoldEot}?#iefix') format('embedded-opentype'),
      url(${RobotoBoldWoff2}) format('woff2'),
      url(${RobotoBoldWoff}) format('woff'),
      url(${RobotoBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: Roboto;
    src: url(${RobotoRegularEot});
    src: url('${RobotoRegularEot}?#iefix') format('embedded-opentype'),
      url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff'),
      url(${RobotoRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: Roboto;
    src: url(${RobotoItalicEot});
    src: url('${RobotoItalicEot}?#iefix') format('embedded-opentype'),
      url(${RobotoItalicWoff2}) format('woff2'),
      url(${RobotoItalicWoff}) format('woff'),
      url(${RobotoItalicTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
`;
