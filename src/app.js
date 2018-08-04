import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

//components
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action'

// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
  constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
          options: []
      };
  }

  componentDidMount() {
      try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
          if (options) {this.setState( () => ( {options} ))}
      } catch (e) {
          // Do nothing at all
      }        
  }
  

  componentDidUpdate(prevProps, prevState) {
      
      if (prevState.options.length !== this.state.options.length) {
          console.log('saving data');
          const json = JSON.stringify(this.state.options)
          localStorage.setItem('options', json);
      }
  }

  componentWillUnmount() {
      console.log('componentWillUnmount')
  }

  handleDeleteOptions() {
      this.setState( () => ( { options: [] } ));
  }

  handleDeleteOption(optionToRemove) {
      this.setState( (prevState) => ( {
          options: prevState.options.filter((option) => optionToRemove !== option)
      }))
  }

  handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
  }

  handleAddOption(option) {
      if (!option) {
          return 'Enter Valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
          return 'This option already exists'
      }

      this.setState( (prevState) => (
              { options: prevState.options.concat([option]) }));
  }

  render() {
      const subtitle = 'Put your life in the hands of a computer';
      
      return (
          <div>
              <Header  subtitle={subtitle}/>
              <Action 
                  hasOptions={this.state.options.length > 0}
                  handlePick={this.handlePick}
              />
              <Options
               options={this.state.options} 
               handleDeleteOptions={this.handleDeleteOptions}
               handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                  handleAddOption={this.handleAddOption}
              />
          </div>
      )
  }
}


// Header Component
const Header = (props) => {
  return (
      <div>
          <h1>{props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

// Action Component. Chooses a random option from the list


// Options Component. Renders available options


ReactDOM.render(<IndecisionApp options={['dinner', 'lunch']} />, document.getElementById('app'));
