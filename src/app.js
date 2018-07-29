// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() =>{
            return {
                options: []
            }
        })
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render() {
        const  title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                 options={this.state.options} 
                 handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// Header Component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
};

// Action Component. Chooses a random option from the list
class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>
                    Are You Feeling Lucky Punk?
                </button>
            </div>
        )
    }
};

// Options Component. Renders available options
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ul>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        )
    }
}

// AddOption Component. Adds option
class AddOption extends React.Component {
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

        this.setState(() => {
            return { error };
        })

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


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
