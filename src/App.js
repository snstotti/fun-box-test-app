import React from 'react';
import s from './App.module.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className={s.test}>
      <div className={s.container}>
      <div className={s.container__block}>
        <h1>Ты сегодня покормил кота?</h1>
      <Card 
        taste='с фуа-гра'
        bonus='10 порций
        мышь в подарок'
        size='0,5'
        description='Печень утки разварная с артишоками.' />
      <Card 
        taste='с рыбой'
        bonus='40 порций
        2 мыши в подарок'
        size='2'
        description='Головы щучьи с чесноком да свежайшая сёмгушка.' />
      <Card 
        taste='с курой'
        bonus='100 порций
        5 мышей в подарок
        заказчик доволен'
        size='5'
        description='Филе из цыплят с трюфелями в бульоне.' />
      </div>
    </div>
    </div>
    
  );
}

export default App;
