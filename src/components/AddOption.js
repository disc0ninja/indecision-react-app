import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
      super(props);
      this.handleOptionSubmit = this.handleOptionSubmit.bind(this);
      this.state = {
          error: undefined
      }
  }
  handleOptionSubmit(e) {
      e.preventDefault();

      const option = e.target.elements.addOption.value
      const error = this.props.handleAddOption(option);

      this.setState(() => ( { error }));

      if (!error) {
          e.target.elements.addOption.value = ''
      }
  }

  render() {
      return (
          <div>
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.handleOptionSubmit}>
                  <input type='text' name='addOption' />
                  <button>Add Option</button>
              </form>
          </div>
      )
  }
}


