import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import * as Pages from 'pages';
import { useUser } from 'contexts/UserContext';

interface RouteConfig {
  path: string;
  protected?: boolean;
  element: JSX.Element;
}

const routes: RouteConfig[] = [
  { path: '/', protected: true, element: <Pages.Home /> },
  { path: '/login', element: <Pages.LoginSignup /> },
];

export function Router(): JSX.Element {
  const { isLoggedIn } = useUser();

  function ProtectedRoute({ element }: { element: JSX.Element }) {
    return isLoggedIn() ? element : <Navigate to="/login" replace />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoute element={route.element} />
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
