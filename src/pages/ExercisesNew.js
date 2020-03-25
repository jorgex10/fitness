/* eslint-disable react/no-unused-state */
import React from 'react';

import ExercisesForm from '../components/ExercisesForm';
import Card from '../components/Card';
import '../components/styles/ExercisesNew.css';
import FatalError from './500';

class ExercisesNew extends React.Component {
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
    const { form, error } = this.state;

    if (error) { return <FatalError />; }

    return (
      <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
          <Card {...form} />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
          <ExercisesForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={form}
          />
        </div>
      </div>
    );
  }
}

export default ExercisesNew;
