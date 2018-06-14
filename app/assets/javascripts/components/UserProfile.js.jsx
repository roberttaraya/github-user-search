class UserProfile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      following,
      html_url,
      location,
      login,
      name,
      public_repos,
    } = this.props.user;
    const {
      followersList,
      handleFetchFollowers,
      handleFetchRepos,
      handleSetUser,
      reposList,
      user,
    } = this.props;
    return (
      <div className="profile-container">
        <ProfileHeader
          avatar_url={avatar_url}
          bio={bio}
          blog={blog}
          className="item-header"
          company={company}
          followersCount={followersList.length}
          following={following}
          html_url={html_url}
          location={location}
          login={login}
          name={name}
          public_repos={public_repos}
        />
        <hr />
        <div className="flex-container">
          <Repositories
            repos={reposList}
          />
          <Followers
            followers={followersList}
            handleSetUser={handleSetUser}
            handleFetchFollowers={handleFetchFollowers}
            handleFetchRepos={handleFetchRepos}
          />
        </div>
      </div>
    )
  }
}
