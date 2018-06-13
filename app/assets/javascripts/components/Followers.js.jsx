class Followers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followers: []
    }
  }

  componentWillMount() {
    fetch(`${this.props.followers_url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ followers: data })
      })
  }

  render() {
    return (
      <div>
        <p>List of Followers</p>
        {this.state.followers.map(follower => {
          return (
            <div>{follower.login}</div>
          )
        })}
      </div>
    )
  }
}
