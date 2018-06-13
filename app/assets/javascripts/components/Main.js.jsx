class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }

    this.handleSetUsers = this.handleSetUsers.bind(this)
  }

  handleSetUsers(usersList) {
    this.setState({ users: usersList})
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <Header handleSetUsers={this.handleSetUsers} />
        <SearchResults users={this.state.users}/>
      </div>
    )
  }
}
