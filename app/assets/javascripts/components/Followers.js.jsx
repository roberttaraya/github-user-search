class Followers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleSetUser, followers, handleFetchRepos, handleFetchFollowers } = this.props;
    return (
      <div className="followers-container">
        <h1>List of Followers</h1>
        {followers.map(follower => {
          return (
            <GithubUser
              key={follower.id}
              user={follower}
              setUser={handleSetUser}
              fetchRepos={handleFetchRepos}
              fetchFollowers={handleFetchFollowers}
            />
          )
        })}
      </div>
    )
  }
}
