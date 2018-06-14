const ResultsGrid = ({
  handleFetchFollowers,
  handleFetchRepos,
  handleSetUser,
  users,
}) => {
  return (
    <div className="grid-container">
      {users.map(user => (
        <GithubUser
          fetchFollowers={handleFetchFollowers}
          fetchRepos={handleFetchRepos}
          key={user.id}
          setUser={handleSetUser}
          user={user}
        />
      ))}
    </div>
  )
}
