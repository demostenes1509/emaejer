import React, { Component } from 'react';
import { connect } from 'react-redux'

class Products extends Component {
  render() {
    return (
      <div style={{
        width: '80%',
        height: '50%',
        margin: 'auto auto',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ul style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }} >
            {this.props.products.map(product => (
                <li>
                    <p>{product}</p>
                </li>
            ))}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
}) 

export default connect(mapStateToProps, null)(Products);
