// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
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
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}


IndecisionApp.defaultProps = {
    options: []
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
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                Are You Feeling Lucky Punk?
            </button>
        </div>
    );
};

// Options Component. Renders available options
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ul>
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            </ul>
        </div>
    )
}

// Option Component
const Option = (props) => {
    return (
        <div>
            <li>{props.optionText}</li>
        </div>
    )
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


ReactDOM.render(<IndecisionApp options={['dinner', 'lunch']} />, document.getElementById('app'));
