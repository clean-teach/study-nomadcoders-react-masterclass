import { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1.2;
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
* {
  box-sizing: border-box;
}
`;

const BtnTheme = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  border: none;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
    transition: 0.2s;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const onDarkModeChange = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem('darkMode', String(!darkMode));
  };

  useEffect(() => {
    window.localStorage.getItem('darkMode') === String(true)
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BtnTheme onClick={onDarkModeChange}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </BtnTheme>
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
