import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Acceuil1 from './Components/Accueil1';
import Introduction from './Components/Introduction';
import Objectif from './Components/Objectif';
import Signup from './users/Signup/Signup';
import { PrivateRoute } from './users/PrivateRoute.js';
import Login from './users/Login/Login';
import Atelier from './Components/Atelier';
import Dashboard from './users/Dashboard/Admin/Dashboard1'
import AjoutA from './users/Dashboard/Admin/postWithUpload_frontToBack';
import ListeA from './users/Dashboard/Admin/AfficheProfil';
import Edit from './users/Dashboard/Admin/Edit';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className='div'>
          <Switch className='margin'>
            <Route exact path='/' component={Acceuil1} />
            <PrivateRoute path="/admin" component={Dashboard} />
            <Route path='/connect' component={Login} />
            <PrivateRoute path='/ajout' component={AjoutA} />
            <PrivateRoute path='/liste' component={ListeA} />
            <Route exact path='/atelier' component={Atelier} />
            <Route path='/introduction' render={props => <Introduction {...props} />} />
            <Route path='/objectif' render={props => <Objectif {...props} />} />
            <Route path='/register' component={Signup} />
            <PrivateRoute path="/edit/:id" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;