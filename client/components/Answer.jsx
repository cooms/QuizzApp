import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="answerWrapper text-center">
        <button
          className="btn btn-primary"
          onClick={this.props.showAnswer}> reveal answer </button>
        <p> {this.props.answer} </p>
      </div>
    )
  }
})
