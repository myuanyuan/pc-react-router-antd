import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import './Example.scss';

@Form.create()
export class Example extends Component {
  render() {
    return (
      <div className="Example">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to="/Example2" className="pure-menu-link"><Button>this is Example, click to Example2</Button></Link>
          </p>
        </header>xsxs
      </div>
    );
  }
}

