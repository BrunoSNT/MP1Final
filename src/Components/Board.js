import React from 'react';
import Square from './Square'

export default class Board extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            squares: Array(),
            id: this.props.value,
          };
        }
      
        handleClick(i) {
          const squares = this.state.squares.slice();
          squares[i] = i;
          this.setState({squares: squares});
          this.setState({id: i});
        }
      
        renderSquare(i) {
          return (
            <Square
              value={this.state.squares[i]}
              onClick={() => this.handleClick(i)}
            />
          );
        }
      
        render() {
          const status =  "Last Move: "+ this.state.id;
      
          return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}{this.renderSquare(4)}
              </div>
              <div className="board-row">
                {this.renderSquare(5)}{this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}{this.renderSquare(9)}
              </div>
              <div className="board-row">
                {this.renderSquare(10)}{this.renderSquare(11)}{this.renderSquare(12)}{this.renderSquare(13)}{this.renderSquare(14)}
              </div>
              <div className="board-row">
                {this.renderSquare(15)}{this.renderSquare(16)}{this.renderSquare(17)}{this.renderSquare(18)}{this.renderSquare(19)}
              </div>
              <div className="board-row">
                {this.renderSquare(20)}{this.renderSquare(21)}{this.renderSquare(22)}{this.renderSquare(23)}{this.renderSquare(24)}
              </div>
            </div>
          );
        }
      }
