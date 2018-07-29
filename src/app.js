// Main Application Component (<IndecisionApp />)
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
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
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
};

// Action Component. Chooses a random option from the list
class Action extends React.Component {
    render() {
        return (
            <div>
                <button>Are You Feeling Lucky Punk?</button>
            </div>
        )
    }
};

// Options Component. Renders available options
class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Option</li>
                </ul>
            </div>
        )
    }
}

// AddOption Component. Adds option
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type='text' name='addOption' />
                <button>Add Option</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
