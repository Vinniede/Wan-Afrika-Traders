import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { routes } from "./routes";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
