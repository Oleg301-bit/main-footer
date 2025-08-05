import { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  state = {
    movie: 'The Naked Gun',
    plot: 'Лейтенант Фрэнк Дребин — невероятно неуклюжий и нелепый полицейский детектив. Он расследует покушение на своего напарника, Нордберга. Следы приводят его к бизнесмену Винсенту Людвигу, который планирует убить королеву Великобритании во время её визита в Лос-Анджелес.',
    actors: [
      'Лесли Нильсен',
      'Присцилла Пресли',
      'Рикардо Монтальбан',
      'Джордж Кеннеди',
      'О. Джей Симпсон',
      'Нэнси Маршан',
    ],
    inform: [
      'Страна: США',
      'Студия: Paramount Pictures',
      'Жанр: комедия , детектив ',
      'Год выпуска: 1988',
    ],
    contactInform: [
      'Адрес: New York 5',
      'Email: nakedgun@gmail.com',
      'Телефон: +1 339 225 144',
    ],
  };
  render() {
    return (
      <>
        <div className='card'>
          <Header movie={this.state.movie} />
          <Main
            plot={this.state.plot}
            actors={this.state.actors}
            inform={this.state.inform}
          />
          <Footer contactInform = {this.state.contactInform}/>
        </div>
      </>
    );
  }
}

export default App;
