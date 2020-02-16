import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import Target from './Target';
import Card from './Card';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const update = require('immutability-helper');

class App extends Component {
  state = {
    // items: [
    //   { id: 1, name: 'Item 1' },
    //   { id: 2, name: 'Item 2' },
    //   { id: 3, name: 'Item 3' },
    //   { id: 4, name: 'Item 4' },
    // ],
    cards: [
      {
        id: 1,
        text: '1.1',
      },
      {
        id: 2,
        text: '2.2',
      },
      {
        id: 3,
        text: '3.3',
      },
      {
        id: 4,
        text: '4.4',
      },
      {
        id: 5,
        text:
          '5.5',
      },
      {
        id: 6,
        text: '6.6'
      },
      {
        id: 7,
        text: '7.7',
      },
      {
        id: 8,
        text: '8.8',
      },
      {
        id: 9,
        text: '9.9',
      },
      {
        id: 10,
        text: '10.10',
      },
      {
        id: 11,
        text: '11.11',
      },
      {
        id: 12,
        text:
          '12.12',
      },
      {
        id: 13,
        text: '13.13'
      },
      {
        id: 14,
        text: '14.14',
      },
      {
        id: 15,
        text: '15.15'
      },
      {
        id: 16,
        text: '16.16',
      },
    ],
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {/* <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>

            <Target />
          </div> */}
          <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
