import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { isServer } from '../../libs/utils';

const font = url => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return xhr.responseText;
};

const changeFontFamily = (fontFace, newName) => {
    const newFontFace = fontFace.replace(/Lato/g, newName);
    return newFontFace;
};

const latoBlack = changeFontFamily(
    font('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap').toString(),
    'Lato Black',
);
const latoBlackItalic = changeFontFamily(
    font(
        'https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Lato:ital,wght@0,900;1,900&display=swap',
    ).toString(),
    'Lato Black Italic',
);

const latoBold = changeFontFamily(
    font('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap').toString(),
    'Lato Bold',
);
const latoBoldItalic = changeFontFamily(
    font(
        'https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Lato:ital,wght@0,700;1,700&display=swap',
    ).toString(),
    'Lato Bold Italic',
);

const latoHairline = changeFontFamily(
    font('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap').toString(),
    'Lato Hairline',
);
const latoHairlineItalic = changeFontFamily(
    font(
        'https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lato:ital,wght@0,100;1,100&display=swap',
    ).toString(),
    'Lato Hairline Italic',
);

const latoLight = changeFontFamily(
    font('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap').toString(),
    'Lato Light',
);
const latoLightItalic = changeFontFamily(
    font(
        'https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lato:ital,wght@0,300;1,300&display=swap',
    ).toString(),
    'Lato Light Italic',
);

const lato = changeFontFamily(
    font('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap').toString(),
    'Lato',
);
const latoItalic = changeFontFamily(
    font(
        'https://fonts.googleapis.com/css2?family=Lato:wght@400&family=Lato:ital,wght@0,400;1,400&display=swap',
    ).toString(),
    'Lato Italic',
);

const legacyStyles = `

  ${latoBlack}
  ${latoBlackItalic}
  
  ${latoBold}
  ${latoBoldItalic}

  ${latoHairline}
  ${latoHairlineItalic}

  ${latoLight}
  ${latoLightItalic}

  ${lato}
  ${latoItalic}

  html {
    font-family: 'Lato', Arial, sans-serif;
    font-size: 100%;
    line-height: 1.5;
    background: #fafaf9;
    color: #3e3e3c;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent; }
  
  body {
    margin: 0;
    font-size: 0.8125rem;
    background: transparent; }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block; }
  
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline; }
  
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle; }
  
  audio:not([controls]) {
    display: none;
    height: 0; }
  
  template {
    display: none; }
  
  a {
    background-color: transparent;
    color: #006dcc;
    text-decoration: none;
    transition: color 0.1s linear; }
  
  a,
  button {
    cursor: pointer; }
  
  a:hover,
  a:focus {
    text-decoration: underline;
    color: #005fb2; }
  
  a:active {
    color: #005fb2; }
  
  a:active,
  a:hover {
    outline: 0; }
  
  abbr[title] {
    border-bottom: 1px dotted;
    text-decoration: none;
    cursor: help; }
  
  b,
  strong {
    font-weight: bold; }
  
  dfn {
    font-style: italic; }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0; }
  
  mark {
    background-color: #fff03f;
    color: #3e3e3c; }
  
  small {
    font-size: 80%; }
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline; }
  
  sup {
    top: -0.5em; }
  
  sub {
    bottom: -0.25em; }
  
  img {
    border: 0;
    height: auto;
    max-width: 100%; }
  
  svg:not(:root) {
    overflow: hidden; }
  
  figure {
    margin: 1em 40px; }
  
  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    padding: 0;
    display: block;
    margin: 2rem 0;
    border-top: 1px solid #dddbda;
    height: 1px;
    clear: both; }
  
  pre {
    overflow: auto; }
  
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em; }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0; }
  
  button {
    overflow: visible; }
  
  button,
  select {
    text-transform: none; }
  
  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer; }
  
  button[disabled],
  html input[disabled] {
    cursor: default; }
  
  input {
    line-height: normal; }
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0; }
  
  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0; }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto; }
  
  input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: border-box; }
  
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none; }
  
  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em; }
  
  legend {
    border: 0;
    padding: 0; }
  
  textarea {
    overflow: auto; }
  
  optgroup {
    font-weight: bold; }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%; }
  
  td,
  th {
    padding: 0; }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box; }
  
  ::-moz-selection {
    background: #d8edff;
    text-shadow: none;
    color: #3e3e3c; }
  
  :-ms-input-placeholder {
    color: #706e6b;
    font-weight: 400;
    font-size: 0.8125rem; }
  
  ::placeholder {
    color: #706e6b;
    font-weight: 400;
    font-size: 0.8125rem; }
  
  ::selection {
    background: #d8edff;
    text-shadow: none;
    color: #3e3e3c; }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  dl,
  fieldset {
    margin: 0;
    padding: 0; }
  
  dd,
  figure {
    margin: 0; }
  
  abbr[title],
  fieldset,
  hr {
    border: 0; }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: 1em; }
  
  ol,
  ul {
    list-style: none; }
  
  b,
  strong,
  dfn {
    font-weight: 700; }
  
  caption,
  th,
  td {
    text-align: left; }
  
  .rainbow-link {
    font-size: 15px;
    line-height: 2.46;
    color: #01b6f5;
    align-items: center;
    display: inline-flex;
    justify-content: center; }
  
  .rainbow-link:hover,
  .rainbow-link:focus,
  .rainbow-link:active,
  .rainbow-link:visited {
    color: #009acf; }
  
  .rainbow-background-color_brand {
    background-color: #01b6f5; }
  
  .rainbow-background-color_brand-active {
    background-color: #009acf; }
  
  .rainbow-color_brand {
    color: #01b6f5; }
  
  .rainbow-color_brand-active {
    color: #009acf; }
  
  .rainbow-background-color_success {
    background-color: #1de9b6; }
  
  .rainbow-background-color_success-active {
    background-color: #1ad1a3; }
  
  .rainbow-color_success {
    color: #1de9b6; }
  
  .rainbow-color_success-active {
    color: #1ad1a3; }
  
  .rainbow-background-color_error {
    background-color: #fe4849; }
  
  .rainbow-background-color_error-active {
    background-color: #ea4243; }
  
  .rainbow-color_error {
    color: #fe4849; }
  
  .rainbow-color_error-active {
    color: #ea4243; }
  
  .rainbow-background-color_yellow {
    background-color: #fc0; }
  
  .rainbow-color_yellow {
    color: #fc0; }
  
  .rainbow-background-color_purple {
    background-color: #663398; }
  
  .rainbow-color_purple {
    color: #663398; }
  
  .rainbow-background-color_gray-1 {
    background-color: #f4f6f9; }
  
  .rainbow-color_gray-1 {
    color: #f4f6f9; }
  
  .rainbow-background-color_gray-2 {
    background-color: #e3e5ed; }
  
  .rainbow-color_gray-2 {
    color: #e3e5ed; }
  
  .rainbow-background-color_gray-3 {
    background-color: #a4a7b5; }
  
  .rainbow-color_gray-3 {
    color: #a4a7b5; }
  
  .rainbow-background-color_gray-4 {
    background-color: #576574; }
  
  .rainbow-color_gray-4 {
    color: #576574; }
  
  .rainbow-background-color_white {
    background-color: #fff; }
  
  .rainbow-color_white {
    color: #fff; }
  
  .rainbow-background-color_dark-1 {
    background-color: #061c3f; }
  
  .rainbow-color_dark-1 {
    color: #061c3f; }
  
  .rainbow-p-top_xx-small {
    padding-top: 0.25rem; }
  
  .rainbow-p-right_xx-small {
    padding-right: 0.25rem; }
  
  .rainbow-p-bottom_xx-small {
    padding-bottom: 0.25rem; }
  
  .rainbow-p-left_xx-small {
    padding-left: 0.25rem; }
  
  .rainbow-p-vertical_xx-small {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem; }
  
  .rainbow-p-horizontal_xx-small {
    padding-right: 0.25rem;
    padding-left: 0.25rem; }
  
  .rainbow-p-around_xx-small {
    padding: 0.25rem; }
  
  .rainbow-p-top_x-small {
    padding-top: 0.5rem; }
  
  .rainbow-p-right_x-small {
    padding-right: 0.5rem; }
  
  .rainbow-p-bottom_x-small {
    padding-bottom: 0.5rem; }
  
  .rainbow-p-left_x-small {
    padding-left: 0.5rem; }
  
  .rainbow-p-vertical_x-small {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem; }
  
  .rainbow-p-horizontal_x-small {
    padding-right: 0.5rem;
    padding-left: 0.5rem; }
  
  .rainbow-p-around_x-small {
    padding: 0.5rem; }
  
  .rainbow-p-top_small {
    padding-top: 0.75rem; }
  
  .rainbow-p-right_small {
    padding-right: 0.75rem; }
  
  .rainbow-p-bottom_small {
    padding-bottom: 0.75rem; }
  
  .rainbow-p-left_small {
    padding-left: 0.75rem; }
  
  .rainbow-p-vertical_small {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; }
  
  .rainbow-p-horizontal_small {
    padding-right: 0.75rem;
    padding-left: 0.75rem; }
  
  .rainbow-p-around_small {
    padding: 0.75rem; }
  
  .rainbow-p-top_medium {
    padding-top: 1rem; }
  
  .rainbow-p-right_medium {
    padding-right: 1rem; }
  
  .rainbow-p-bottom_medium {
    padding-bottom: 1rem; }
  
  .rainbow-p-left_medium {
    padding-left: 1rem; }
  
  .rainbow-p-vertical_medium {
    padding-top: 1rem;
    padding-bottom: 1rem; }
  
  .rainbow-p-horizontal_medium {
    padding-right: 1rem;
    padding-left: 1rem; }
  
  .rainbow-p-around_medium {
    padding: 1rem; }
  
  .rainbow-p-top_large {
    padding-top: 1.5rem; }
  
  .rainbow-p-right_large {
    padding-right: 1.5rem; }
  
  .rainbow-p-bottom_large {
    padding-bottom: 1.5rem; }
  
  .rainbow-p-left_large {
    padding-left: 1.5rem; }
  
  .rainbow-p-vertical_large {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem; }
  
  .rainbow-p-horizontal_large {
    padding-right: 1.5rem;
    padding-left: 1.5rem; }
  
  .rainbow-p-around_large {
    padding: 1.5rem; }
  
  .rainbow-p-top_x-large {
    padding-top: 2rem; }
  
  .rainbow-p-right_x-large {
    padding-right: 2rem; }
  
  .rainbow-p-bottom_x-large {
    padding-bottom: 2rem; }
  
  .rainbow-p-left_x-large {
    padding-left: 2rem; }
  
  .rainbow-p-vertical_x-large {
    padding-top: 2rem;
    padding-bottom: 2rem; }
  
  .rainbow-p-horizontal_x-large {
    padding-right: 2rem;
    padding-left: 2rem; }
  
  .rainbow-p-around_x-large {
    padding: 2rem; }
  
  .rainbow-p-top_xx-large {
    padding-top: 3rem; }
  
  .rainbow-p-right_xx-large {
    padding-right: 3rem; }
  
  .rainbow-p-bottom_xx-large {
    padding-bottom: 3rem; }
  
  .rainbow-p-left_xx-large {
    padding-left: 3rem; }
  
  .rainbow-p-vertical_xx-large {
    padding-top: 3rem;
    padding-bottom: 3rem; }
  
  .rainbow-p-horizontal_xx-large {
    padding-right: 3rem;
    padding-left: 3rem; }
  
  .rainbow-p-around_xx-large {
    padding: 3rem; }
  
  .rainbow-p-top_none {
    padding-top: 0 !important; }
  
  .rainbow-p-right_none {
    padding-right: 0 !important; }
  
  .rainbow-p-bottom_none {
    padding-bottom: 0 !important; }
  
  .rainbow-p-left_none {
    padding-left: 0 !important; }
  
  .rainbow-p-vertical_none {
    padding-top: 0;
    padding-bottom: 0; }
  
  .rainbow-p-horizontal_none {
    padding-right: 0;
    padding-left: 0; }
  
  .rainbow-p-around_none {
    padding: 0; }
  
  .rainbow-m_auto {
    margin: auto; }
  
  .rainbow-m-top_xx-small {
    margin-top: 0.25rem; }
  
  .rainbow-m-right_xx-small {
    margin-right: 0.25rem; }
  
  .rainbow-m-bottom_xx-small {
    margin-bottom: 0.25rem; }
  
  .rainbow-m-left_xx-small {
    margin-left: 0.25rem; }
  
  .rainbow-m-vertical_xx-small {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem; }
  
  .rainbow-m-horizontal_xx-small {
    margin-right: 0.25rem;
    margin-left: 0.25rem; }
  
  .rainbow-m-around_xx-small {
    margin: 0.25rem; }
  
  .rainbow-m-top_x-small {
    margin-top: 0.5rem; }
  
  .rainbow-m-right_x-small {
    margin-right: 0.5rem; }
  
  .rainbow-m-bottom_x-small {
    margin-bottom: 0.5rem; }
  
  .rainbow-m-left_x-small {
    margin-left: 0.5rem; }
  
  .rainbow-m-vertical_x-small {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem; }
  
  .rainbow-m-horizontal_x-small {
    margin-right: 0.5rem;
    margin-left: 0.5rem; }
  
  .rainbow-m-around_x-small {
    margin: 0.5rem; }
  
  .rainbow-m-top_small {
    margin-top: 0.75rem; }
  
  .rainbow-m-right_small {
    margin-right: 0.75rem; }
  
  .rainbow-m-bottom_small {
    margin-bottom: 0.75rem; }
  
  .rainbow-m-left_small {
    margin-left: 0.75rem; }
  
  .rainbow-m-vertical_small {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem; }
  
  .rainbow-m-horizontal_small {
    margin-right: 0.75rem;
    margin-left: 0.75rem; }
  
  .rainbow-m-around_small {
    margin: 0.75rem; }
  
  .rainbow-m-top_medium {
    margin-top: 1rem; }
  
  .rainbow-m-right_medium {
    margin-right: 1rem; }
  
  .rainbow-m-bottom_medium {
    margin-bottom: 1rem; }
  
  .rainbow-m-left_medium {
    margin-left: 1rem; }
  
  .rainbow-m-vertical_medium {
    margin-top: 1rem;
    margin-bottom: 1rem; }
  
  .rainbow-m-horizontal_medium {
    margin-right: 1rem;
    margin-left: 1rem; }
  
  .rainbow-m-around_medium {
    margin: 1rem; }
  
  .rainbow-m-top_large {
    margin-top: 1.5rem; }
  
  .rainbow-m-right_large {
    margin-right: 1.5rem; }
  
  .rainbow-m-bottom_large {
    margin-bottom: 1.5rem; }
  
  .rainbow-m-left_large {
    margin-left: 1.5rem; }
  
  .rainbow-m-vertical_large {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem; }
  
  .rainbow-m-horizontal_large {
    margin-right: 1.5rem;
    margin-left: 1.5rem; }
  
  .rainbow-m-around_large {
    margin: 1.5rem; }
  
  .rainbow-m-top_x-large {
    margin-top: 2rem; }
  
  .rainbow-m-right_x-large {
    margin-right: 2rem; }
  
  .rainbow-m-bottom_x-large {
    margin-bottom: 2rem; }
  
  .rainbow-m-left_x-large {
    margin-left: 2rem; }
  
  .rainbow-m-vertical_x-large {
    margin-top: 2rem;
    margin-bottom: 2rem; }
  
  .rainbow-m-horizontal_x-large {
    margin-right: 2rem;
    margin-left: 2rem; }
  
  .rainbow-m-around_x-large {
    margin: 2rem; }
  
  .rainbow-m-top_xx-large {
    margin-top: 3rem; }
  
  .rainbow-m-right_xx-large {
    margin-right: 3rem; }
  
  .rainbow-m-bottom_xx-large {
    margin-bottom: 3rem; }
  
  .rainbow-m-left_xx-large {
    margin-left: 3rem; }
  
  .rainbow-m-vertical_xx-large {
    margin-top: 3rem;
    margin-bottom: 3rem; }
  
  .rainbow-m-horizontal_xx-large {
    margin-right: 3rem;
    margin-left: 3rem; }
  
  .rainbow-m-around_xx-large {
    margin: 3rem; }
  
  .rainbow-m-top_none {
    margin-top: 0 !important; }
  
  .rainbow-m-right_none {
    margin-right: 0 !important; }
  
  .rainbow-m-bottom_none {
    margin-bottom: 0 !important; }
  
  .rainbow-m-left_none {
    margin-left: 0 !important; }
  
  .rainbow-m-vertical_none {
    margin-top: 0;
    margin-bottom: 0; }
  
  .rainbow-m-horizontal_none {
    margin-right: 0;
    margin-left: 0; }
  
  .rainbow-m-around_none {
    margin: 0; }
  
  .rainbow-flex {
    display: -ms-flexbox;
    display: flex; }
  
  .rainbow-inline-flex {
    display: inline-flex; }
  
  .rainbow-flex_column {
    flex-direction: column; }
  
  .rainbow-flex_column-reverse {
    flex-direction: column-reverse; }
  
  .rainbow-flex_row {
    flex-direction: row; }
  
  .rainbow-flex_row-reverse {
    flex-direction: row-reverse; }
  
  .rainbow-flex_wrap {
    flex-wrap: wrap; }
  
  .rainbow-flex_no-wrap {
    flex-wrap: nowrap; }
  
  .rainbow-justify_center {
    -ms-flex-pack: center;
    justify-content: center; }
  
  .rainbow-justify_space-around {
    -ms-flex-pack: distribute;
    justify-content: space-around; }
  
  .rainbow-justify_spread {
    -ms-flex-pack: justify;
    justify-content: space-between; }
  
  .rainbow-justify_end {
    -ms-flex-pack: end;
    justify-content: flex-end; }
  
  .rainbow-align_start {
    -ms-flex-align: start;
    align-items: flex-start; }
  
  .rainbow-align_center {
    -ms-flex-align: center;
    align-items: center; }
  
  .rainbow-align_end {
    -ms-flex-align: end;
    align-items: flex-end; }
  
  .rainbow_vertical-stretch {
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch; }
  
  .rainbow-position-align_start {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start; }
  
  .rainbow-align-content_space-between {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .rainbow-align-content_center {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-align: center;
    align-items: center; }
  
  .rainbow-position_absolute {
    position: absolute; }
  
  .rainbow-position_relative {
    position: relative; }
  
  .rainbow-position_fixed {
    position: fixed; }
  
  .rainbow-border-radius_circle {
    border-radius: 12rem; }
  
  .rainbow-border-radius_oval {
    border-radius: 0.875rem; }
  
  .rainbow-font-size-heading_small {
    font-size: 1rem; }
  
  .rainbow-font-size-heading_medium {
    font-size: 1.25rem; }
  
  .rainbow-font-size-heading_large {
    font-size: 1.5rem; }
  
  .rainbow-font-size-heading_x-large {
    font-size: 2rem; }
  
  .rainbow-font-size-text_x-small {
    font-size: 0.625rem; }
  
  .rainbow-font-size-text_small {
    font-size: 0.75rem; }
  
  .rainbow-font-size-text_medium {
    font-size: 0.875rem; }
  
  .rainbow-font-size-text_large {
    font-size: 1rem; }
`;

const RainbowLegacyStyles = isServer
    ? createGlobalStyle`
          ${legacyStyles}
      `
    : () => <style>{legacyStyles}</style>;

export default RainbowLegacyStyles;
