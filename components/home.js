import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  componentDidMount() {
    axios.get('http://119.45.139.165').then((res) => {
      console.log(res)
    })
  }
  render() {
    return <div onClick={() => alert(666)}>home</div>
  }
}
