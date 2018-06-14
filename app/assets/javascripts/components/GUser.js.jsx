const GUser = ({ handleClickUser, avatar_url, login }) => {
  return (
    <div
      className="grid-item"
      onClick={handleClickUser}
    >
      <img className="img-sm" src={avatar_url} />
      <h1>{login}</h1>
    </div>
  )
}
