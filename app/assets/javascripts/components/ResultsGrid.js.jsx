const ResultsGrid = ({ users, handleSetUser }) => {
  return (
    <div className="grid-container">
      {users.map(user => (
        <GithubUser
          key={user.id}
          user={user}
          setUser={handleSetUser}
        />
      ))}
    </div>
  )
}
