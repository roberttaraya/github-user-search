class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      users: []
    }

    this.handleSetUser = this.handleSetUser.bind(this)
    this.handleSetUsers = this.handleSetUsers.bind(this)
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
        <Header handleSetUsers={this.handleSetUsers} />
        <SearchResults
          user={this.state.user}
          users={this.state.users}
          handleSetUser={this.handleSetUser}
        />
      </div>
    )
  }
}
