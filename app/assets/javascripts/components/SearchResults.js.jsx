class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followersList: [],
      reposList: []
    }
    this.fetchFollowers = this.handleFetchFollowers.bind(this)
    this.fetchRepos = this.handleFetchRepos.bind(this)
  }

  isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  handleFetchFollowers(userLogin) {
    fetch(`/github/users/${userLogin}/followers`)
      .then(response => response.json())
      .then(data => {
        this.setState({ followersList: data })
      })
  }

  handleFetchRepos(userLogin) {
    fetch(`/github/users/${userLogin}/repos`)
      .then(response => response.json())
      .then(data => {
        this.setState({ reposList: data })
      })
  }

  render() {
    const { followersList, reposList } = this.state;
    const { handleSetUser, user, users } = this.props;
    return (
      <div>
        {
          !this.isEmpty(user)
            &&  <UserProfile
                  handleSetUser={handleSetUser}
                  user={user}
                  handleFetchRepos={this.fetchRepos}
                  handleFetchFollowers={this.fetchFollowers}
                  followersList={followersList}
                  reposList={reposList}
                />
        }
        {
          users.length !== 0
            &&  <ResultsGrid
                  handleSetUser={handleSetUser}
                  handleFetchRepos={this.fetchRepos}
                  handleFetchFollowers={this.fetchFollowers}
                  users={users}
                />
        }
      </div>
    )
  }
}
