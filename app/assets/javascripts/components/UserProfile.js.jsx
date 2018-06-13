class UserProfile extends React.Component {
  render() {
    const { avatar_url, name, html_url, login } = this.props.user;
    return (
      <div className="profile-container">
        <ProfileHeader
          user={this.props.user}
          className="item-header"
          avatar_url={avatar_url}
          name={name}
          html_url={html_url}
          login={login}
        />
        <div>
          <p>List of Repositories</p>
        </div>
        <div>
          <p>List of followers</p>
        </div>
      </div>
    )
  }
}
