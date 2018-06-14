class GithubUser extends React.Component {
  constructor(props) {
    super(props)
    this.fetchUser = this.handleFetchUser.bind(this)
    this.handleClickUser = this.handleClickUser.bind(this)
    this.fetchFollowers = this.props.fetchFollowers
    this.fetchRepos = this.props.fetchRepos
    this.setUser = this.props.setUser
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
      <GUser
        handleClickUser={this.handleClickUser}
        avatar_url={avatar_url}
        login={login}
      />
    )
  }
}
