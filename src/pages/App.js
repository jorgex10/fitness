import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExercisesContainer from './ExercisesContainer';
import ExercisesNewContainer from './ExercisesNewContainer';
import NotFound from './404';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/exercises" exact component={ExercisesContainer} />
      <Route path="/exercises/new" exact component={ExercisesNewContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
