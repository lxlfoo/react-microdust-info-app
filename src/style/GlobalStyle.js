import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 400;
  }

  :root {
    --blue: #0d47a1;
    --blue-light: #e3f2fd;
    --green: #1b5e20;
    --green-light: #e8f5e9;
    --yellow: #f57f17;
    --yellow-light: #fffde7;
    --red: #b71c1c;
    --red-light: #ffebee;
    --gray: #616161;
    --gray-light: #eeeeee;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nanum Gothic', sans-serif;
    color: #222;
    line-height: 1.2;
  }

  ol, ul {
    list-style: none;
  }

  a, a:hover, a:active, a:link, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
