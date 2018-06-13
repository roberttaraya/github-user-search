const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header-container">
      <img className="img-lg profile-header-item-left" src={user.avatar_url} />
      <div className=" profile-header-item-right">
        <ProfileSummary
          user={user}
          name={user.name}
          html_url={user.html_url}
          login={user.login}
        />
      </div>
    </div>
  )
}
