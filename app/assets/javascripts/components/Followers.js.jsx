class Followers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      followers,
      handleFetchFollowers,
      handleFetchRepos,
      handleSetUser,
    } = this.props;

    return (
      <div className="followers-container">
        <h1>List of Followers</h1>
        {followers.map(follower => {
          return (
            <GithubUser
              fetchFollowers={handleFetchFollowers}
              fetchRepos={handleFetchRepos}
              key={follower.id}
              setUser={handleSetUser}
              user={follower}
            />
          )
        })}
      </div>
    )
  }
}
