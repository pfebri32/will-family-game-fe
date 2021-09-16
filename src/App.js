import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages.
import About from './pages/About';
import Home from './pages/Home';
import Option from './pages/Option';
import PageNotFound from './pages/errors/PageNotFound';
import PickGames from './pages/PickGames';
import Room from './pages/Room';

// Stores
import Store from './Store';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/option" component={Option} exact />
          <Route path="/games" component={PickGames} exact />
          <Route path="/room" component={Room} exact />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
