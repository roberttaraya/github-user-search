class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  render() {
    const { user, users } = this.props;
    console.log("user: ", user)
    console.log("users: ", users)
    return(
      <div>
        {!this.isEmpty(user) && <UserProfile user={user} />}
        {users.length !== 0 && <ResultsGrid users={users} handleSetUser={this.props.handleSetUser} />}
      </div>
    )
  }
}
