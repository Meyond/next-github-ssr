import React, { Component } from 'react'

export default class MyCounter extends Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  state = {
    count: 0,
  }

  componentDidMount() {
    console.log(this.ref.current)

    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return <span ref={this.ref}>计数器：{this.state.count}</span>
  }
}
