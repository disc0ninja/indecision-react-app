class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.state = {
      visible: false
    }
  }

  toggleVisible() {
    this.setState( (prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisible}>{this.state.visible ? 'Hide' : 'Show'} details</button>
        <p hidden={this.state.visible ? false : true} >Hey, These are some details you can see!</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
