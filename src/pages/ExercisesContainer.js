import React from 'react';

import Loading from '../components/Loading';
import Exercises from './Exercises';
import FatalError from './500';

class ExercisesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/exercises');
      const data = await res.json();
      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) { return <Loading />; }

    if (error) { return <FatalError />; }

    return <Exercises data={data} />;
  }
}

export default ExercisesContainer;
