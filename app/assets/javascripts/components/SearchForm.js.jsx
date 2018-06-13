class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ username: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`/github/search?username=${this.state.username}`)
      .then(response => response.json())
      .then(data => {
        this.props.setUsers(data)
        this.setState({ username: "" })
      })
  }
  render() {
    console.log("search form state: ", this.state)
    console.log("search form props: ", this.props)
    return(
      <form className="flex-container flex-end flex-item" onSubmit={this.handleSubmit}>
        <input className="flex-end" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Search for a user, e.g. roberttaraya" />
      </form>
    )
  }
}
