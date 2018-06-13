const ProfileSummary = ({ user }) => {
  return (
    <div className="summary">
      <h1>{user.name} <span className="summary-username"><a href={user.html_url}>@{user.login}</a></span></h1>
      <p>{user.bio}</p>
      <p>{user.company}</p>
      <p>{user.location}</p>
      <a href={user.blog}>{user.blog}</a>
    </div>
  )
}
