import React, { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import Exercises from './Exercises';
import FatalError from './500';

const ExercisesContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/exercises');
        const apiData = await res.json();
        setData(apiData);
        setLoading(false);
      } catch (errors) {
        setLoading(false);
        setError(errors);
      }
    };
    fetchExercises();
  }, []);

  if (loading) { return <Loading />; }

  if (error) { return <FatalError />; }

  return <Exercises data={data} />;
};

export default ExercisesContainer;
