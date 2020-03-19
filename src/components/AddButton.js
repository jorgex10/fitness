import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AddButton.css';
import AddButtonImage from '../images/add-button.png';

const AddButton = () => (
  <Link to="/exercises/new">
    <img src={AddButtonImage} alt="Add Exercise" className="Fitness-Add" />
  </Link>
);

export default AddButton;
