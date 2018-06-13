const ResultsGrid = ({ users }) => {
  return (
    <div className="grid-container">
      {users.map(user => (
        <GithubUser  key={user.id} user={user} />
      ))}
    </div>
  )
}
