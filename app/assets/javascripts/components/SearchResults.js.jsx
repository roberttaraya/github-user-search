class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <ResultsGrid users={this.props.users} />
      </div>
    )
  }
}
