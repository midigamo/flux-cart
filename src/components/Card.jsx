import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Card">
        <div className="flux-cart active">
          <div className="mini-cart">
            <button type="button" className="close-cart">×</button>
            <ul>
              <li>
                <h1 className="name">Name</h1>
                <p className="type">type x 2</p>
                <p className="price">$20 * 10</p>
                <button type="button" className="remove-item">Remove</button>
              </li>
            </ul>
            <span className="total">Total: $90</span>
          </div>
          <button type="button" className="view-cart">View Cart</button>
        </div>
      </div>
    );
  }
}

export default Card;