import React from 'react';

export default class Menu extends React.Component {

    buySoldier(){
      return console.log(1);
    }

    buyMage(){
      return console.log(2);
    }

    buyDragon(){
      return console.log(3);
    }
    render() {
      return (
        <div>
          <button
            className="c_soldados"
            onClick={() => this.buySoldier()} > 
          </button>
          <button
            className="c_magos"
            onClick={() => this.buyMage()} >
          </button>
          <button
            className="c_dragoes"
            onClick={() => this.buyDragon()} >
          </button>
        </div>
      )};
  }