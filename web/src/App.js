import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Login from './pages/Login';

export default () => {
      return(
            <>
                  <Switch>
                        <Route exact path='/' component={ Login } />
                  </Switch>
            </>
      );
}