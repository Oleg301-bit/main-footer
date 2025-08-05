import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    const contactInformation = this.props.contactInform;
    return (
      <>
        <h3>Контактная информация</h3>
        <ul>
          {contactInformation.map((contactInformation) => {
            return <li key={contactInformation}>{contactInformation}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Footer;
