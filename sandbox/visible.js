// Set app container div in index.html
const app = document.getElementById('app');

let visState = 'Show';
const toggleVis = () => {
  if (visState === 'Show') {
    visState = 'Close';
  } else if (visState === 'Close') {
    visState = 'Show';
  } else {
    console.log('Something went wrong');
  }
  renderApp();
};
// render app
const renderApp = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVis} >{`${visState} details`}</button>
      <p hidden={visState === 'Show'}>Hey, These are some details you can see!</p>
    </div>
  );

  ReactDOM.render(visible, app);
}

// start app
renderApp();
