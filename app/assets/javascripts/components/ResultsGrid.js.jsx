const ResultsGrid = ({ users, handleSetUser, handleFetchRepos, handleFetchFollowers }) => {
  return (
    <div className="grid-container">
      {users.map(user => (
        <GithubUser
          key={user.id}
          user={user}
          setUser={handleSetUser}
          fetchRepos={handleFetchRepos}
          fetchFollowers={handleFetchFollowers}
        />
      ))}
    </div>
  )
}
