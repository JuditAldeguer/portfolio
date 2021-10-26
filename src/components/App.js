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
  const routeData = useRouteMatch('/product-detail/:id');
  const productId = routeData !== null ? routeData.params.productId : '';

  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/CV/">
          <p>Descargar curriculum</p>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
