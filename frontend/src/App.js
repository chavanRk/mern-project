import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersPage from './pages/UsersPage.js';
import LocationsPage from './pages/LocationsPage.js';
// import Switch from 'react-router-dom/Switch'

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/users">
          <UsersPage />
        </Route>
        <Route exact path="/locations">
          <LocationsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
