// App Target
const appRoot = document.getElementById('app');

// App Data
const app = {
    title: 'Indecision App',
    subtitle: 'Are you feeling lucky?',
    options: []
}

// Options Form Submission
const onFormSubmit = (e) => {
    // Stop full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options);
        renderApplication();
    }

    console.log(option);
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// Clear options from app{}
const removeAll = () => {
    app.options = [];
    renderApplication();
};

// Render Application Function
const renderApplication = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ul>
                {
                    app.options.map( (opt) => {
                        return (<li key={opt}>{opt}</li>);
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button onClick={renderApplication}>Add Option</button>
            </form>
            </div>
    );

    ReactDOM.render(template, appRoot);
};

// Start Application
renderApplication();