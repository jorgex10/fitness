import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Exercises from './Exercises';
import ExercisesNew from './ExercisesNew';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/exercises" exact component={Exercises} />
      <Route path="/exercises/new" exact component={ExercisesNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
