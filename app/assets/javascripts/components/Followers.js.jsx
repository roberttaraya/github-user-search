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
    const { handleSetUser } = this.props;
    return (
      <div className="followers-container">
        <h1>List of Followers</h1>
        {this.state.followers.map(follower => {
          return (
            <GithubUser
              key={follower.id}
              user={follower}
              setUser={handleSetUser}
            />
          )
        })}
      </div>
    )
  }
}
