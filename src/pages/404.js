import React from 'react';

import '../components/styles/Errors.css';
import NotFoundImg from '../images/404.png';

const NotFound = () => (
  <div className="text-center">
    <h1 className="Error-Text">Error 404: Page not found</h1>
    <img src={NotFoundImg} alt="500 Unexpected error" className="Error-Image" />
  </div>
);

export default NotFound;
