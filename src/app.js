// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
    render() {
        const  title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
        const options = ['thing1', 'thing2', 'thing3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Are You Feeling Lucky Punk?</button>
            </div>
        )
    }
};

// Options Component. Renders available options
class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>{`Length: ${this.props.options.length}`}</p>
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
