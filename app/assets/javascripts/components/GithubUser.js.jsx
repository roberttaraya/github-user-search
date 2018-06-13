const GithubUser = ({ user }) => {
  return (
    <div className="grid-item">
      <a href="#">
        <img src={user.avatar_url} />
        <h1>{user.login}</h1>
      </a>
    </div>
  )
}
