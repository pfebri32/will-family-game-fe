import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Pages.
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
