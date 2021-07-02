import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Loginpage';

class Grocesry extends React.Component{
  render() {
    return (
      <Login />
  
    );
  }

}

ReactDOM.render(<Grocesry />, document.getElementById('root'));
