/* eslint-disable prettier/prettier */
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
import 'typeface-montserrat';
import 'typeface-merriweather';

export const sansSerifFontFamilies = [
  // 西文
  'Montserrat',

  // '-apple-system-font',
  // 'Helvetica Neue', // <mac/无衬线>, 优于 Helvetica
  // 'Helvetica', // <mac/无衬线>
  // 'Tahoma', // <win/无衬线>, 好于 Arial
  // 'Verdana',
  // 'Arial', // <win/无衬线>

  // 中文
  'PingFang SC', // 苹方, <mac>
  'Hiragino Sans GB', // 冬青黑体, <mac>
  'Microsoft YaHei', // 微软雅黑, win
  'Heiti SC', // 黑体-简, win
  'WenQuanYi Micro Hei', // 文泉驿微米黑，<Linux>

  // fallback
  'sans-serif',
];

export const serifFontFamilies = [
  // 西文
  'Merriweather',
  'Georgia',

  // 中文
  'Noto Serif CJK SC',
  'Source Han Serif SC',
  'Source Han Serif CN', // 思源宋体
  'Songti SC', // 华文宋体, mac
  'SimSun', // 中易宋体, win
  'STSong', // 华文宋体
  'AR PL Sungti', // 文鼎简报宋, linux

  // fallback
  'serif',
];

function isHighDensity() {
  return (
    typeof window !== 'undefined'
    && ((window.matchMedia
      && (window.matchMedia(
        'only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)',
      ).matches
        || window.matchMedia(
          'only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)',
        ).matches))
      || (window.devicePixelRatio && window.devicePixelRatio > 1.3))
  );
}

const getFontStr = (arr) => {
  const str = JSON.stringify(arr);
  return str.slice(1, str.length - 1);
};

const sansSerifFontFamiliesStr = getFontStr(sansSerifFontFamilies);
// const serifFontFamiliesStr = getFontStr(serifFontFamilies);

/**
 * Get theme from custom font family
 * @param {Array} sansSerif
 * @param {Array} serif
 */
export function getTheme(sansSerif, serif) {
  const bodyFontFamily = isHighDensity() ? serif : sansSerif;

  return {
    title: 'typography-theme-pottery',
    baseFontSize: '16px',
    baseLineHeight: 1.75,
    scaleRatio: 5 / 2,
    headerFontFamily: sansSerif,
    bodyFontFamily,
    bodyColor: 'hsla(0,0%,0%,0.9)',
    headerWeight: 900,
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
      html: {
        'text-rendering': 'optimizeLegibility',
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13 / 16),
        marginLeft: rhythm(-1),
        borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      ul: {
        listStyle: 'disc',
      },
      'ul,ol': {
        marginLeft: 0,
      },
      [MOBILE_MEDIA_QUERY]: {
        'ul,ol': {
          marginLeft: rhythm(1),
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(9 / 16),
        },
      },
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: sansSerifFontFamiliesStr,
        marginTop: rhythm(2),
      },
      'h1,h2,h3,h4,h5,h6 > a': {
        fontFamily: sansSerifFontFamiliesStr,
      },
      h4: {
        letterSpacing: '0.05em',
      },
      h6: {
        fontStyle: 'italic',
      },
      a: {
        boxShadow: 'none',
        color: '#03a9f4',
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        boxShadow: '0 1px 0 0 currentColor',
      },
      'mark,ins': {
        background: '#03a9f4',
        color: 'white',
        padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
        textDecoration: 'none',
      },
      'p code': {
        fontSize: '1.1rem',
      },
      'li code': {
        fontSize: '1rem',
      },
    }),
  };
}

export default getTheme(sansSerifFontFamilies, serifFontFamilies);
