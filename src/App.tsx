import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { routes } from './routes';
import { ErrorBoundary } from './components/common/ErrorBoundary';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <AppRoutes />
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

