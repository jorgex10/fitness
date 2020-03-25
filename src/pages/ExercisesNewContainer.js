import React from 'react';

import ExercisesNew from './ExercisesNew';
import FatalError from './500';

import '../components/styles/ExercisesNew.css';
import Loading from '../components/Loading';

class ExercisesNewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: '',
      },
      error: null,
      loading: false,
    };
  }

  handleChange = (e) => {
    const { form } = this.state;

    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { history } = this.props;
    const { form } = this.state;

    this.setState({
      loading: true,
    });

    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      };
      const res = await fetch('http://localhost:8000/api/exercises', config);
      const json = await res.json();
      console.log(json);
      this.setState({
        loading: false,
      });
      history.push('/exercises/');
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  }

  render() {
    const { form, loading, error } = this.state;

    if (loading) { return <Loading />; }

    if (error) { return <FatalError />; }

    return (
      <ExercisesNew
        form={form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default ExercisesNewContainer;
