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
      <div>
        <p>List of Repositories</p>
        {this.state.repos.map(repo => {
          return (
            <div>{repo.name}</div>
          )
        })}
      </div>
    )
  }
}
