import React from 'react';
import Header from './Header.jsx';
import GameBoard from './GameBoard.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isRedNext: true;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <GameBoard />
      </div>
    )
  }
}

export default App;