import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.list,
      color: this.props.color
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const updateList = [...this.state.list, 'Kyiv']
      this.setState({ list: updateList, color: 'lightpink' })
    }, 1000)
  }

  render() {
    return (
      <>
        <ul style={{ backgroundColor: this.state.color }}>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    )
  }
}

export default List