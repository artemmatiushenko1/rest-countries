import NunitoSans_ExtraBoldTTF from 'assets/fonts/NunitoSans-ExtraBold.ttf';
import NunitoSans_LightTTF from 'assets/fonts/NunitoSans-Light.ttf';
import NunitoSans_SemiBoldTTF from 'assets/fonts/NunitoSans-SemiBold.ttf';

import NunitoSans_ExtraBoldWOFF from 'assets/fonts/NunitoSans-ExtraBold.woff';
import NunitoSans_LightWOFF from 'assets/fonts/NunitoSans-Light.woff';
import NunitoSans_SemiBoldWOFF from 'assets/fonts/NunitoSans-SemiBold.woff';

import NunitoSans_ExtraBoldWOFF2 from 'assets/fonts/NunitoSans-ExtraBold.woff2';
import NunitoSans_LightWOFF2 from 'assets/fonts/NunitoSans-Light.woff2';
import NunitoSans_SemiBoldWOFF2 from 'assets/fonts/NunitoSans-SemiBold.woff2';

export const overrides = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Nunito Sans';
        src: url(${NunitoSans_SemiBoldWOFF2}) format('woff2'),
            url(${NunitoSans_SemiBoldWOFF}) format('woff'),
            url(${NunitoSans_SemiBoldTTF}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Nunito Sans';
        src: url(${NunitoSans_LightWOFF2}) format('woff2'),
            url(${NunitoSans_LightWOFF}) format('woff'),
            url(${NunitoSans_LightTTF}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Nunito Sans';
        src: url(${NunitoSans_ExtraBoldWOFF2}) format('woff2'),
            url(${NunitoSans_ExtraBoldWOFF}) format('woff'),
            url(${NunitoSans_ExtraBoldTTF}) format('truetype');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
      }
    `,
  },
};
