import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleOptionSubmit = (e) => {
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
                {this.state.error && <p className='add-option-error'>
                {this.state.error}</p>}
                <form
                    className='add-option'
                    onSubmit={this.handleOptionSubmit}
                >
                    <input className='add-option__input'
                        type='text'
                        name='addOption' />
                    <button className='button' >Add Option</button>
                </form>
            </div>
        )
    }
}


