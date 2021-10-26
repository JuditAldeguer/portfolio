import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NotFoundPage from './secondary-components/NotFoundPage';

function App() {
  return (
    <div className="page">
      {/* <Header />
      <Main />
      <Footer /> */}
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/aboutMe" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/projects" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/header" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/CV" exact>
          <p>Descargar curriculum</p>
        </Route>
        <Route>
          <Header />
          <Main />
          <Footer />
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
