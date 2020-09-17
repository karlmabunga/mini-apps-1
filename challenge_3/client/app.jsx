

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h2>Checkout</h2> <br></br>
      <form>
        <input type='text' placeholder='Name'/><br></br>
        <input type='text' placeholder='Email'/><br></br>
        <input type='text' placeholder='Password'/><br></br>
        <input type='submit' />
      </form>
    </div>
      )
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('app')
)