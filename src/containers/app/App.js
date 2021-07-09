import React, {Component} from 'react';

import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

class App extends Component {
  state  = {
    input: ''
  };

  handleOnClick = () => {
    console.log('Button was clicked');
  }

  handleOnChange = event => {
    // console.log('Input was changed', event.target.value);

    this.setState({ input: event.target.value });

    console.log(this.state);
  }

  render() { 
    const { input } = this.state;
    return (
      <div>
        <List todoList={[]} />
        <Input onChange={() => this.handleOnChange()} value={input} />
        <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
      </div>
    );    
  }
}

export default App;