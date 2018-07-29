// Counter Example Application
// Component State Playground

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    console.log('handleAddOne')
  }

  handleSubtractOne() {
    console.log('handleSubtractOne')
  }

  handleReset() {
    console.log('handleReset')
  }

  render() {

    return (
      <div>
      <h1>Count: </h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleSubtractOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    );

  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
