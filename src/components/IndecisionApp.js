import React from 'react';

// Components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';


// Main Application Component (<IndecisionApp />)
export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }

    handleDeleteOptions = () => {
        this.setState( () => ( {options: []} ));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState( (prevState) => ( {
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState( (prevState) => (
            { options: prevState.options.concat([option]) })
        );
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
