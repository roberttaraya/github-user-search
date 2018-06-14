const UserProfile = ({
  followersList,
  handleFetchFollowers,
  handleFetchRepos,
  handleSetUser,
  reposList,
  user: {
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
  },
}) => {
  return (
    <div className="profile-container">
      <ProfileHeader
        className="item-header"
        avatar_url={avatar_url}
        bio={bio}
        blog={blog}
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
          handleFetchFollowers={handleFetchFollowers}
          handleFetchRepos={handleFetchRepos}
          handleSetUser={handleSetUser}
        />
      </div>
    </div>
  )
}
