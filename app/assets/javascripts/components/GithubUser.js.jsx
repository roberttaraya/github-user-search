class GithubUser extends React.Component {
  constructor(props) {
    super(props)

    this.handleClickUser = this.handleClickUser.bind(this)
  }

  handleClickUser() {
    const { user, setUser } = this.props
    console.log("setUser: ", setUser)
    fetch(`/github/users/${user.login}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
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
