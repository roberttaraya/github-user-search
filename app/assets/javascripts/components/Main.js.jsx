class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      users: []
    }
    this.setUser = this.handleSetUser.bind(this)
    this.setUsers = this.handleSetUsers.bind(this)
  }

  handleSetUsers(usersList) {
    this.setState({
      users: usersList,
      user: {}
    })
  }

  handleSetUser(user) {
    this.setState({
      users: [],
      user: user
    })
  }

  render() {
    return (
      <div>
        <Header handleSetUsers={this.setUsers} />
        <SearchResults
          user={this.state.user}
          users={this.state.users}
          handleSetUser={this.setUser}
        />
      </div>
    )
  }
}
