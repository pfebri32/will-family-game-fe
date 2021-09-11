import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages.
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/errors/PageNotFound';
import Pick from './pages/PickGames';

// Stores
import Store from './Store';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/pick" component={Pick} exact />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
