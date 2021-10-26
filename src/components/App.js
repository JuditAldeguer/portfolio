import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
//Services
import callToApi from '../services/api';
//Styles
import '../styles/App.scss';
//Components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWindow from './secondary-components/ModalWindow';
import NotFoundPage from './secondary-components/NotFoundPage';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/aboutMe" exact></Route>
        <Route path="/projects" exact></Route>
        <Route path="/contact" exact></Route>
        <Route path="/header" exact></Route>
        <Route path="/cv" exact>
          <ModalWindow title="Press to Download CV">
            <p>Download CV</p>
          </ModalWindow>
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
