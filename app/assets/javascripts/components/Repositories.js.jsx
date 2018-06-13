class Repositories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  componentWillMount() {
    fetch(`${this.props.repos_url}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ repos: data })
      })
  }

  render() {
    return (
      <div className="repos-container">
        <h1>List of Repositories</h1>
        {this.state.repos.map(repo => {
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
