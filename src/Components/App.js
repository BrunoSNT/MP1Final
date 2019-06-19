import React from 'react';
import Game from './Game'

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Game</h1>
                <Game />
            </div>
        );
    }
}