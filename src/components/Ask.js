import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import fetchStudent from '../actions/students/fetch'

class AskButton extends PureComponent {
  // static propTypes = {
  //   signedIn: PropTypes.bool,
  // }

  get() {
    return null
  }


  render() {
    //if (!this.props.signedIn) return null

    return (
      <div className="AskButton">
        <RaisedButton
          label="Ask A Question!"
          primary={true}
          fullWidth={true}
          onClick={this.get()}
          />
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { fetchStudent })(AskButton)
