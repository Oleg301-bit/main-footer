import React, { Component } from 'react';

export class Main extends Component {
  render() {
    const plot = this.props.plot;
    const actors = this.props.actors;
    const inform = this.props.inform;
    return (
      <>
        <h3>Сюжет</h3>
        <p>{plot}</p>
        <h3>Актеры</h3>
        <ul>
          {actors.map((actors) => {
            return <li key={actors}>{actors}</li>;
          })}
        </ul>
        <h3>Общая информация</h3>
        <ul>
          {inform.map((inform) => {
            return <li key={inform}>{inform}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Main;
