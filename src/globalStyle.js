import { createGlobalStyle } from 'styled-components';
import VisueltBoldWoff from './assets/fonts/Visuelt-Bold.woff';
import VisueltBoldWoff2 from './assets/fonts/Visuelt-Bold.woff2';
import VisueltBoldItalicWoff from './assets/fonts/Visuelt-BoldItalic.woff';
import VisueltBoldItalicWoff2 from './assets/fonts/Visuelt-BoldItalic.woff2';
import VisueltItalicWoff from './assets/fonts/Visuelt-Italic.woff';
import VisueltItalicWoff2 from './assets/fonts/Visuelt-Italic.woff2';
import VisueltRegularWoff from './assets/fonts/Visuelt-Regular.woff';
import VisueltRegularWoff2 from './assets/fonts/Visuelt-Regular.woff2';

export default createGlobalStyle`
  body {
    background: #F4F4F4;
    font-family: 'Visuelt';
  }

  @font-face {
    font-family: 'Visuelt';
    src: local('Visuelt Bold'), local('Visuelt-Bold'),
        url('${VisueltBoldWoff2}') format('woff2'),
        url('${VisueltBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
      font-family: 'Visuelt';
      src: local('Visuelt Italic'), local('Visuelt-Italic'),
          url('${VisueltItalicWoff2}') format('woff2'),
          url('${VisueltItalicWoff}') format('woff');
      font-weight: normal;
      font-style: italic;
  }

  @font-face {
    font-family: 'Visuelt';
    src: local('Visuelt-Regular'),
        url('${VisueltRegularWoff2}') format('woff2'),
        url('${VisueltRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'Visuelt';
      src: local('Visuelt Bold Bold Italic'), local('Visuelt-BoldItalic'),
          url('${VisueltBoldItalicWoff2}') format('woff2'),
          url('${VisueltBoldItalicWoff}') format('woff');
      font-weight: bold;
      font-style: italic;
  }
`;
