const ResultsGrid = ({ users }) => {
  return (
    <ul>
      {users.map(user => (<li>{user.url}</li>))}
    </ul>
  )
}
