import React from 'react';

import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import AddButton from '../components/AddButton';

const Exercises = ({ data }) => (
  <>
    <Welcome username="Jorgito" />
    <ExerciseList exercises={data} />
    <AddButton />
  </>
);

export default Exercises;
