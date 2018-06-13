const ProfileSummary = ({
  bio,
  blog,
  company,
  followers,
  following,
  html_url,
  location,
  login,
  name,
  public_repos,
}) => {
  return (
    <div className="summary">
      <div className="user-info">
        <h1>{name} <span className="summary-username"><a href={html_url}>@{login}</a></span></h1>
        <p>{bio}</p>
        <p>{company}</p>
        <p>{location}</p>
        <a href={blog}>{blog}</a>
      </div>
      <div className="github-summary">
        <p><span className="github-summary-label">Followers:</span> <span className="github-summary-data">{followers}</span></p>
        <p><span className="github-summary-label">Following:</span> <span className="github-summary-data">{following}</span></p>
        <p><span className="github-summary-label">Repos:</span> <span className="github-summary-data">{public_repos}</span></p>
      </div>
    </div>
  )
}
