class GithubRepo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      description,
      forks_count,
      language,
      name,
      stargazers_count,
    } = this.props.repo;

    return (
      <div>
        <h4>{name}</h4>
        <div>{description}</div>
        <div>{language}</div>
        <div>Stars: {stargazers_count}</div>
        <div>Forks: {forks_count}</div>
        <hr />
      </div>
    )
  }
}
