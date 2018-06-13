class UserProfile extends React.Component {
  render() {
    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      followers_url,
      following,
      html_url,
      location,
      login,
      name,
      repos_url,
      public_repos,
    } = this.props.user;
    return (
      <div className="profile-container">
        <ProfileHeader
          avatar_url={avatar_url}
          bio={bio}
          blog={blog}
          className="item-header"
          company={company}
          followers={followers}
          following={following}
          html_url={html_url}
          location={location}
          login={login}
          name={name}
          public_repos={public_repos}
        />
        <hr />
        <Repositories repos_url={repos_url}/>
        <Followers followers_url={followers_url}/>
      </div>
    )
  }
}
