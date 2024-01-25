import { theme } from 'config/globals/theme';
import { ToastProvider } from 'contexts/ToastContext';
import { UserProvider } from 'contexts/UserContext';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    color: ${props => props.theme.black}
  }
`;
export function Loader() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <GlobalStyle />
        <ToastProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </ToastProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}
