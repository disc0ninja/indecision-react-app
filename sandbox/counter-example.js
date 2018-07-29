// Counter Example Application
// Component State Playground

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState( (prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleSubtractOne() {
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset() {
    this.setState( () => {
      return {
        count: 0
      }
    });
  }

  render() {

    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleSubtractOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    );

  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));