import React from 'react';
import ExercisesForm from '../components/ExercisesForm';
import Card from '../components/Card';

class ExercisesNew extends React.Component {
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      leftColor: '',
      rightColor: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  render() {
    const { form } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Card {...form} />
          </div>
          <div className="col-sm">
            <ExercisesForm onChange={this.handleChange} form={form} />
          </div>
        </div>
      </div>
    );
  }
}

export default ExercisesNew;
