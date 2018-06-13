class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>This is the SearchResults</h1>
        <ul>
          {this.props.users.map(user => (<li>{user.url}</li>))}
        </ul>
      </div>
    )
  }
}
