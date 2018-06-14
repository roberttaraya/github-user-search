const ProfileHeader = ({
  avatar_url,
  bio,
  blog,
  company,
  followersCount,
  following,
  html_url,
  location,
  login,
  name,
  public_repos,
}) => {
  return (
    <div className="profile-header-container">
      <img className="img-lg profile-header-item-left" src={avatar_url} />
      <div className=" profile-header-item-right">
        <ProfileSummary
          bio={bio}
          blog={blog}
          company={company}
          followersCount={followersCount}
          following={following}
          html_url={html_url}
          location={location}
          login={login}
          name={name}
          public_repos={public_repos}
        />
      </div>
    </div>
  )
}

