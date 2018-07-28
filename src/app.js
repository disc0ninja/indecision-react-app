console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Are you feeling lucky?',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
        </div>
);
const appRoot = document.getElementById('app');

const user = {
    name: 'Billy',
    age: '31',
    location: 'New Zealand'
};

const getLocation = (location) => {
    if (location) {
        return <p>Location: {location}</p>
    }
}


const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anon'}</h1>
        {user.age >= 18 && <p>Age:  {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);