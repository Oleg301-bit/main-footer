import React, { Component } from 'react';

export class Header extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <>
        <h2>{movie}</h2>
      </>
    );
  }
}

export default Header;
