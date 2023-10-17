import { theme } from 'config/globals/theme';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;
export function Loader() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <GlobalStyle />
        <Router />
      </HelmetProvider>
    </ThemeProvider>
  );
}
