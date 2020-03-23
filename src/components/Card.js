import React from 'react';

import CirclesImg from '../images/circles.png';
import emptyImg from '../images/empty.png';
import './styles/Card.css';

class Card extends React.Component {
  render() {
    const {
      title, description, img, leftColor, rightColor,
    } = this.props;

    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${CirclesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img src={img || emptyImg} alt={title} className="float-right" />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
