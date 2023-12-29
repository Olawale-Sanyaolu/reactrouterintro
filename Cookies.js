import React from 'react';
import './Cookies.css';
import Message from './Message.js';
import { Link } from 'react-router-dom';

class Cookies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Cokkies-Container">
          <div className="Cookies-img">
            <img src="https://freesvg.org/img/cookies-ocal.png" alt="" />
          </div>
          <div className="Cookies-heading">
            <Message>
              <h1>Working</h1>
              <Link style={{ color: 'black', fontSize: 28 }} to="/">
                Go Back
              </Link>
            </Message>
          </div>
        </div>
      </>
    );
  }
}

export default Cookies;
