// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['this', 'that', 'and', 'the', 'other', 'thing', 'and1', 'such']
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
                <AddOption />
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
    handleOptionSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.addOption.value

        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOptionSubmit}>
                    <input type='text' name='addOption' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
