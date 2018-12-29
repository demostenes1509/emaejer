import React, { Component } from 'react';
import Counter from './Counter'
import Products from './Products'

class Red extends Component {
  render() {
    return (
      <div style={{
        width: '80%',
        height: '50%',
        margin: 'auto auto',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Counter />
        <Products />
      </div>
    );
  }
}

export default Red;
