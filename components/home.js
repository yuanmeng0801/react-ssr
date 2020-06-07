import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch((dispatch) => {
      axios.get('http://119.45.139.165').then((res) => {
        dispatch({ type: 'changeList', payload: res.data })
      })
    })
  }
  render() {
    return (
      <div onClick={() => alert(666)}>
        {this.props.arr.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    )
  }
}
Home.laodData = (store) => {
  store.dispatch((dispatch) => {
    axios.get('http://119.45.139.165').then((res) => {
      dispatch({ type: 'changeList', payload: res.data })
    })
  })
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(Home)
