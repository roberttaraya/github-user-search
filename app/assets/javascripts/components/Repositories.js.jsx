class Repositories extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { repos } = this.props;

    return (
      <div className="repos-container">
        <h1>List of Repositories</h1>
        {repos.map(repo => {
          return (
            <GithubRepo
              key={repo.id}
              repo={repo}
            />
          )
        })}
      </div>
    )
  }
}
