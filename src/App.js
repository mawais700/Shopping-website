import React from 'react';
import Catalogue from './Components/Catalogue';
import Fashion from './Components/Fashion';
import Favorite from './Components/Favorite';
import Lifestyle from './Components/Lifiestyle';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Error from './Components/Error';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';

const App = ()=>{

  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Catalogue} />
        <Route path="/fashion" component={Fashion}/>
        <Route  path="/favorite" component={Favorite}/>
        <Route path="/lifestyle" component={Lifestyle}/>
      </Switch>

    </>
  )
}

export default App;