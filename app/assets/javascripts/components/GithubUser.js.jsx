class GithubUser extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickUser = this.handleClickUser.bind(this)
    this.fetchUser = this.handleFetchUser.bind(this)
    this.setUser = this.props.setUser
    this.fetchRepos = this.props.fetchRepos
    this.fetchFollowers = this.props.fetchFollowers
  }

  handleClickUser() {
    this.fetchUser()
    this.fetchRepos(this.props.user.login)
    this.fetchFollowers(this.props.user.login)
  }

  handleFetchUser() {
    fetch(`/github/users/${this.props.user.login}`)
      .then(response => response.json())
      .then(data => {
        this.setUser(data)
      })
  }

  render() {
    const { avatar_url, login } = this.props.user;

    return (
      <div
        className="grid-item"
        onClick={this.handleClickUser}
      >
        <img className="img-sm" src={avatar_url} />
        <h1>{login}</h1>
      </div>
    )
  }
}
